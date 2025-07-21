package com.siso.siso.repository;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.enums.StatusSessao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SessaoRepository extends JpaRepository<Sessao, Integer> {

    @Query("SELECT s FROM Sessao s WHERE s.data = :data ORDER BY s.hora_inicio ASC")
    List<Sessao> findByDataOrderByHora_inicioAsc(LocalDate data);

    @Query("""
    SELECT s
    FROM Sessao s
    JOIN s.tratamento t
    WHERE t.profissional.id = :id_profissional
    AND s.data = :data
    ORDER BY s.hora_inicio ASC
""")
    List<Sessao> findByDataAndProfissionalIdOrderByHora_inicioAsc(@Param("data") LocalDate data, @Param("id_profissional") Integer id_profissional);

    @Query("""
    SELECT s FROM Sessao s
    WHERE s.tratamento.profissional.id = :profissional_id
    AND s.status = :status
    AND s.data = :data
""")
    List<Sessao> findPendentesByProfissionalAndData(
            @Param("profissional_id") Integer profissional_id,
            @Param("status") StatusSessao status,
            @Param("data") LocalDate data
    );
}