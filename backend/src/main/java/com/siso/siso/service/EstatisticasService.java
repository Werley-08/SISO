package com.siso.siso.service;

import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.service.interfaces.IEstatisticasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstatisticasService implements IEstatisticasService {

    final IPacienteRepository pacienteRepository;

    @Autowired
    public EstatisticasService(IPacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public Long visualizarQtdPacientes(){
        return pacienteRepository.count();
    }
}