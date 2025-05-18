package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Especialidade;

import java.util.Optional;

public interface IEspecialidadeRepository {
    Especialidade save(Especialidade especialidade);
    Optional<Especialidade> findById(String id);
}
