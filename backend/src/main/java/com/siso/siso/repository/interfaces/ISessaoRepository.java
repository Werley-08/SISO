package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Sessao;

import java.time.LocalDate;
import java.util.List;

public interface ISessaoRepository {
    List<Sessao> findByData(LocalDate date);
}