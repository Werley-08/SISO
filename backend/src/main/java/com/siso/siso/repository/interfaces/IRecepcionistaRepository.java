package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Recepcionista;

import java.util.List;

public interface IRecepcionistaRepository {
    Recepcionista save(Recepcionista recepcionista);
    List<Recepcionista> findAll();
}
