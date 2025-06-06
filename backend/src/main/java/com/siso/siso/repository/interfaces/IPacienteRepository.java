package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Paciente;

import java.util.List;

public interface IPacienteRepository {
    Paciente save(Paciente paciente);
    List<Paciente> findAll();
}
