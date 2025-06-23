package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Paciente;

import java.util.List;
import java.util.Optional;

public interface IPacienteRepository {
    Paciente save(Paciente paciente);
    List<Paciente> findAll();
    Optional<Paciente> findById(Integer id);
}
