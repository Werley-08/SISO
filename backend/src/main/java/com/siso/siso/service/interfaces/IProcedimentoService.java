package com.siso.siso.service.interfaces;

import com.siso.siso.model.Procedimento;

import java.util.List;

public interface IProcedimentoService {
    Procedimento cadastrarProcedimento(Procedimento procedimento);
    List<Procedimento> visualizarProcedimentos();
}