package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Especialidade;

import java.util.List;
import java.util.Optional;

public interface IEspecialidadeRepository {
    Especialidade save(Especialidade especialidade);
    Optional<Especialidade> findById(Integer id);
    Optional<Especialidade> findByNome(String nome);
    List<Especialidade> findAll();
}
