package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Sessao;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ISessaoRepository {
    List<Sessao> findByData(LocalDate date);
    List<Sessao> findByDataAndProfissionalId(@Param("data") LocalDate data, @Param("id_profissional") Integer id_profissional);
    Long count();
}