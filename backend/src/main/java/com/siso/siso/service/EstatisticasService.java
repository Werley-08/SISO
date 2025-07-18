package com.siso.siso.service;

import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import com.siso.siso.service.interfaces.IEstatisticasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstatisticasService implements IEstatisticasService {

    private final IPacienteRepository pacienteRepository;
    private final ISessaoRepository sessaoRepository;

    @Autowired
    public EstatisticasService(IPacienteRepository pacienteRepository, ISessaoRepository sessaoRepository) {
        this.pacienteRepository = pacienteRepository;
        this.sessaoRepository = sessaoRepository;
    }

    @Override
    public Long visualizarQtdPacientes(){
        return pacienteRepository.count();
    }

    @Override
    public Long visualizarQtdAgendamentos(){
        return sessaoRepository.count();
    }
}