package com.siso.siso.repository;

import com.siso.siso.model.Procedimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProcedimentoRepository extends JpaRepository<Procedimento, Integer> {
    Optional<Procedimento> findByNome(String nome);
}