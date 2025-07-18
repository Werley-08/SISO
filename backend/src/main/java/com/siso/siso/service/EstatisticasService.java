package com.siso.siso.service;

import com.siso.siso.repository.ProfissionalDaSaudeRepository;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import com.siso.siso.service.interfaces.IEstatisticasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstatisticasService implements IEstatisticasService {

    private final IPacienteRepository pacienteRepository;
    private final ISessaoRepository sessaoRepository;
    private final IProfissionalDaSaudeRepository profissionalDaSaudeRepository;

    @Autowired
    public EstatisticasService(IPacienteRepository pacienteRepository,
                               ISessaoRepository sessaoRepository,
                               IProfissionalDaSaudeRepository profissionalDaSaudeRepository) {
        this.pacienteRepository = pacienteRepository;
        this.sessaoRepository = sessaoRepository;
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
    }

    @Override
    public Long visualizarQtdPacientes(){
        return pacienteRepository.count();
    }

    @Override
    public Long visualizarQtdAgendamentos(){
        return sessaoRepository.count();
    }

    @Override
    public Long visualizarQtdProfissionais() { return profissionalDaSaudeRepository.count(); }
}