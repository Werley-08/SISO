package com.siso.siso.repository;

import com.siso.siso.model.ProfissionalDaSaude;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProfissionalDaSaudeRepository extends JpaRepository<ProfissionalDaSaude, Integer>{
}