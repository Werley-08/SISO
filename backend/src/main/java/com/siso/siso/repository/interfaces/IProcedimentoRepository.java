package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Procedimento;

import java.util.Optional;

public interface IProcedimentoRepository {
    Optional<Procedimento> findByNome(String nome);
    Procedimento save(Procedimento procedimento);
}
