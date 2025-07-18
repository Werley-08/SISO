package com.siso.siso.service;

import com.siso.siso.model.*;
import com.siso.siso.model.enums.StatusTratamento;
import com.siso.siso.repository.interfaces.*;
import com.siso.siso.service.interfaces.ITratamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TratamentoService implements ITratamentoService {

    private final ITratamentoRepository tratamentoRepository;
    private final IPacienteRepository pacienteRepository;
    private final IProcedimentoRepository procedimentoRepository;
    private final IProfissionalDaSaudeRepository profissionalDaSaudeRepository;

    @Autowired
    public TratamentoService(ITratamentoRepository tratamentoRepository,
                             IPacienteRepository pacienteRepository,
                             IProcedimentoRepository procedimentoRepository,
                             IProfissionalDaSaudeRepository profissionalDaSaudeRepository) {
        this.tratamentoRepository = tratamentoRepository;
        this.pacienteRepository = pacienteRepository;
        this.procedimentoRepository = procedimentoRepository;
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
    }

    @Override
    public Tratamento cadastrarTratamento(Tratamento tratamento){

        Paciente paciente = pacienteRepository.findById(tratamento.getPaciente().getId())
                .orElseThrow(() -> new  RuntimeException("Paciente não existe no sistema"));

        Procedimento procedimento = procedimentoRepository.findById(tratamento.getProcedimento().getId())
                .orElseThrow(() -> new  RuntimeException("Procedimento não existe no sistema"));

        ProfissionalDaSaude profissionalDaSaude = profissionalDaSaudeRepository.findById(tratamento.getProfissional().getId())
                .orElseThrow(() -> new  RuntimeException("Profissional não existe no sistema"));

        tratamento.setPaciente(paciente);
        tratamento.setProcedimento(procedimento);
        tratamento.setProfissional(profissionalDaSaude);
        return tratamentoRepository.save(tratamento);
    }

    @Override
    public List<Tratamento> visualizarTratamentoByPaciente(Integer id_paciente){

        Paciente paciente = pacienteRepository.findById(id_paciente)
                .orElseThrow(() -> new  RuntimeException("Paciente não existe no sistema"));

        return tratamentoRepository.findByPaciente(paciente);
    }

    @Override
    public Tratamento visualizarTratamentoById(Integer id_tratamento){
        return tratamentoRepository.findById(id_tratamento)
                .orElseThrow(() -> new  RuntimeException("Tratamento não existe no sistema"));
    }

    @Override
    public Tratamento atualizarAnotacoes(Tratamento tratamentoEditado, Integer id_tratamento){
        Tratamento tratamentoExistente = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(()-> new RuntimeException("Tratamento não encontrado"));

        tratamentoExistente.setOutras_informacoes(tratamentoEditado.getOutras_informacoes());

        return tratamentoRepository.save(tratamentoExistente);
    }

    @Override
    public Tratamento encerrarTratamento(Integer id_tratamento){
        Tratamento tratamento = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(()-> new RuntimeException("Tratamento não encontrado"));

        tratamento.setStatus(StatusTratamento.FINALIZADO);

        return tratamentoRepository.save(tratamento);
    }

    @Override
    public Tratamento interromperTratamento(Integer id_tratamento){
        Tratamento tratamento = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(()-> new RuntimeException("Tratamento não encontrado"));

        if (tratamento.getStatus() == StatusTratamento.FINALIZADO) {
            throw new RuntimeException("Não é possível interromper um tratamento já finalizado.");
        }

        tratamento.setStatus(StatusTratamento.INTERROMPIDO);

        return tratamentoRepository.save(tratamento);
    }
}