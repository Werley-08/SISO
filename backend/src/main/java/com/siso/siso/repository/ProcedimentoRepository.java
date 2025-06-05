package com.siso.siso.repository;

import com.siso.siso.model.Procedimento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProcedimentoRepository extends JpaRepository<Procedimento, Integer> {
    Optional<Procedimento> findByNome(String nome);
}