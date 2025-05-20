package com.siso.siso.repository;

import com.siso.siso.model.ProfissionalDaSaude;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfissionalDaSaudeRepository extends JpaRepository<ProfissionalDaSaude, Integer>{
}