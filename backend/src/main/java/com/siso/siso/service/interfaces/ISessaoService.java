package com.siso.siso.service.interfaces;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;

import java.time.LocalDate;
import java.util.List;

public interface ISessaoService {

    Tratamento cadastrarSessao(Sessao sessao, Integer id_tratamento);
    List<Sessao> visualizarSessao(LocalDate data);
}