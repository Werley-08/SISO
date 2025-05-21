package com.siso.siso.repository.interfaces;

import com.siso.siso.model.ProfissionalDaSaude;

import java.util.Optional;

public interface IProfissionalDaSaudeRepository{
    ProfissionalDaSaude save(ProfissionalDaSaude profissionalDaSaude);
    Optional<ProfissionalDaSaude> findById(Integer id);
}