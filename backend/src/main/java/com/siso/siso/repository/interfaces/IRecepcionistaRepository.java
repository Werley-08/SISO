package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Recepcionista;

import java.util.List;
import java.util.Optional;

public interface IRecepcionistaRepository {
    Recepcionista save(Recepcionista recepcionista);
    Optional<Recepcionista> findById(Integer id);
    List<Recepcionista> findAll();
}