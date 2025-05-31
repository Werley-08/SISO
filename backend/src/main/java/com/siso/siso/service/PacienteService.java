package com.siso.siso.service;

import com.siso.siso.model.Paciente;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.service.interfaces.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PacienteService implements IPacienteService {

    private final IPacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(IPacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public Paciente cadastrarPaciente(Paciente paciente) {
        return pacienteRepository.save(paciente);

    }
}
