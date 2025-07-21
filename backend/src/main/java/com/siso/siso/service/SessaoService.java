package com.siso.siso.service;

import com.siso.siso.model.*;
import com.siso.siso.model.enums.DiaSemana;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.StatusSessao;
import com.siso.siso.model.enums.StatusTratamento;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import com.siso.siso.repository.interfaces.ITratamentoRepository;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class SessaoService implements ISessaoService {

    private final ITratamentoRepository tratamentoRepository;
    private final ISessaoRepository sessaoRepository;

    @Autowired
    public SessaoService(ITratamentoRepository tratamentoRepository,
                         ISessaoRepository sessaoRepository) {
        this.tratamentoRepository = tratamentoRepository;
        this.sessaoRepository = sessaoRepository;
    }

    @Override
    public Tratamento cadastrarSessao(Sessao sessao, Integer id_tratamento) {

        Tratamento tratamento = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(() -> new  RuntimeException("Tratamento não existe no sistema"));

        if(tratamento.getStatus() == StatusTratamento.FINALIZADO) {
            throw new RuntimeException("Não é permitido cadastrar sessões para tratamentos finalizados");
        }

        if(tratamento.getStatus() == StatusTratamento.INTERROMPIDO) {
            throw new RuntimeException("Não é permitido cadastrar sessões para tratamentos interrompidos");
        }

        if (sessao.getHora_inicio().isAfter(sessao.getHora_finalizacao())){
            throw new RuntimeException("O horário de início da sessão deve ser anterior ao horário de finalização");
        }

        if (sessao.getData().isBefore(LocalDate.now())) {
            throw new RuntimeException("A data da sessão deve ser hoje ou uma data futura");
        }

        if(!verificaHorario(sessao, tratamento)) {
            throw new RuntimeException("Este horário de atendimento não está disponível");
        }

        sessao.setTratamento(tratamento);
        tratamento.getSessoes().add(sessao);
        return tratamentoRepository.save(tratamento);
    }

    @Override
    public List<Sessao> visualizarSessao(LocalDate data){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Usuario usuario = (Usuario) authentication.getPrincipal();

        if (usuario.getRole().equals(Role.RECEPCIONISTA)){
            return sessaoRepository.findByData(data);
        }

        else if (usuario.getRole().equals(Role.PROFISSIONAL_DA_SAUDE)){
            return sessaoRepository.findByDataAndProfissionalId(data, usuario.getId());
        }

        else {
            throw new RuntimeException("Acesso de usuário inválido");
        }
    }

    @Override
    public Sessao atualizarAnotacoes(Sessao sessaoEditada, Integer id_sessao) {
        Sessao sessaoExistente = sessaoRepository.findById(id_sessao)
                .orElseThrow(()-> new RuntimeException("Sessão não encontrada"));

        sessaoExistente.setOutras_informacoes(sessaoEditada.getOutras_informacoes());

        return sessaoRepository.save(sessaoExistente);
    }

    @Override
    public Sessao cancelarSessao(Integer id_sessao) {
        Sessao sessao = sessaoRepository.findById(id_sessao)
                .orElseThrow(()-> new RuntimeException("Sessão não encontrada"));

        sessao.setStatus(StatusSessao.CANCELADA);

        return sessaoRepository.save(sessao);
    }

    @Override
    public Sessao concluirSessao(Integer id_sessao) {
        Sessao sessao = sessaoRepository.findById(id_sessao)
                .orElseThrow(()-> new RuntimeException("Sessão não encontrada"));

        sessao.setStatus(StatusSessao.REALIZADA);

        return sessaoRepository.save(sessao);
    }

    private boolean verificaHorario(Sessao sessao, Tratamento tratamento) {
        ProfissionalDaSaude profissional = tratamento.getProfissional();

        if (!estaDentroDoHorarioDeAtendimento(sessao, profissional)) {
            return false;
        }

        if (haConflitoComOutrasSessoes(sessao, profissional)) {
            return false;
        }

        return true;
    }

    private boolean estaDentroDoHorarioDeAtendimento(Sessao sessao, ProfissionalDaSaude profissional) {
        DiaSemana diaSessao = converterDia(sessao.getData().getDayOfWeek());

        return profissional.getHorarios_atendimento().stream()
                .filter(h -> h.getDia_semana().name().equals(diaSessao.name()))
                .anyMatch(h ->
                        !sessao.getHora_inicio().isBefore(h.getHorario_inicio()) &&
                                !sessao.getHora_finalizacao().isAfter(h.getHorario_fim())
                );
    }

    private boolean haConflitoComOutrasSessoes(Sessao sessao, ProfissionalDaSaude profissional) {
        List<Sessao> sessoesPendentes = sessaoRepository.findPendentesByProfissionalAndData(
                profissional.getId(),
                StatusSessao.PENDENTE,
                sessao.getData()
        );

        return sessoesPendentes.stream().anyMatch(s ->
                sessao.getHora_inicio().isBefore(s.getHora_finalizacao()) &&
                        sessao.getHora_finalizacao().isAfter(s.getHora_inicio())
        );
    }

    private DiaSemana converterDia(DayOfWeek diaJava) {
        return switch (diaJava) {
            case MONDAY -> DiaSemana.SEGUNDA;
            case TUESDAY -> DiaSemana.TERCA;
            case WEDNESDAY -> DiaSemana.QUARTA;
            case THURSDAY -> DiaSemana.QUINTA;
            case FRIDAY -> DiaSemana.SEXTA;
            case SATURDAY -> DiaSemana.SABADO;
            case SUNDAY -> DiaSemana.DOMINGO;
        };
    }
}