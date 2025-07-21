package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.enums.StatusSessao;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ISessaoRepository {
    List<Sessao> findByDataOrderByHora_inicioAsc(LocalDate date);
    List<Sessao> findByDataAndProfissionalIdOrderByHora_inicioAsc(@Param("data") LocalDate data, @Param("id_profissional") Integer id_profissional);
    Long count();
    Optional<Sessao> findById(Integer id);
    Sessao save(Sessao sessao);
    List<Sessao> findPendentesByProfissionalAndData(
            @Param("profissionalId") Integer profissional_id,
            @Param("status") StatusSessao status,
            @Param("data") LocalDate data
    );
}