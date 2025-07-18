package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Paciente;
import com.siso.siso.model.Tratamento;

import java.util.List;
import java.util.Optional;

public interface ITratamentoRepository {

    Tratamento save(Tratamento tratamento);
    Optional<Tratamento> findById(Integer id);
    List<Tratamento> findByPaciente(Paciente paciente);
}