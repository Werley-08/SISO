package com.siso.siso.repository.implement;

import com.siso.siso.model.Paciente;
import com.siso.siso.repository.PacienteRepository;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Override
    public List<Paciente> findAll() {
        return pacienteRepository.findAll();
    }
}
