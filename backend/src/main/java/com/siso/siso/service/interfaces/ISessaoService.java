package com.siso.siso.service.interfaces;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;

public interface ISessaoService {

    Tratamento cadastrarSessao(Sessao sessao, Integer id_tratamento);
}