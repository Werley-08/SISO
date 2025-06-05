package com.siso.siso.repository.implement;

import com.siso.siso.model.Paciente;
import com.siso.siso.repository.PacienteRepository;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PacienteRepositoryImplement implements IPacienteRepository{
    private final PacienteRepository pacienteRepository;

    @Autowired
    public PacienteRepositoryImplement(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public Paciente save(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }
}
