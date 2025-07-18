package com.siso.siso.service;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;
import com.siso.siso.model.Usuario;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.StatusSessao;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import com.siso.siso.repository.interfaces.ITratamentoRepository;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
}