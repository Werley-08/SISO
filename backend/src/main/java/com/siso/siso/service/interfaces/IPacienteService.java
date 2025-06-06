package com.siso.siso.service.interfaces;

import com.siso.siso.model.Paciente;

import java.util.List;

public interface IPacienteService {
    Paciente cadastrarPaciente(Paciente paciente);
    List<Paciente> visualizarPacientes();
}
