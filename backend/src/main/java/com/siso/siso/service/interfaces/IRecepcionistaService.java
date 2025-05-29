package com.siso.siso.service.interfaces;

import com.siso.siso.model.Recepcionista;

import java.util.List;

public interface IRecepcionistaService {
    Recepcionista cadastrarRecepcionista(Recepcionista recepcionista);
    Recepcionista visualizarRecepcionista(Integer id);
    List<Recepcionista> listarRecepcionistas();
}