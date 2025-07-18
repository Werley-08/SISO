package com.siso.siso.repository;

import com.siso.siso.model.Sessao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SessaoRepository extends JpaRepository<Sessao, Integer> {
    List<Sessao> findByData(LocalDate date);

    @Query("""
    SELECT s
    FROM Sessao s
    JOIN s.tratamento t
    WHERE t.profissional.id = :id_profissional
      AND s.data = :data
""")
    List<Sessao> findByDataAndProfissionalId(@Param("data") LocalDate data, @Param("id_profissional") Integer id_profissional);
}