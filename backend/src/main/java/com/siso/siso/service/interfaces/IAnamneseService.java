package com.siso.siso.service.interfaces;

import com.siso.siso.model.Anamnese;

public interface IAnamneseService {
    Anamnese cadastrarAnamnese(Anamnese anamnese);
    Anamnese editarAnamnese(Anamnese anamnese, Integer id);
    Anamnese visualizarAnamnese(Integer id);
}
