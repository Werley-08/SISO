package com.siso.siso.repository;

import com.siso.siso.model.HorarioAtendimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorarioAtendimentoRepository extends JpaRepository<HorarioAtendimento, Integer> {
}