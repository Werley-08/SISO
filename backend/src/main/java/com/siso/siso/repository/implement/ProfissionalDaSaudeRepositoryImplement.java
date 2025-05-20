package com.siso.siso.repository.implement;

import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.ProfissionalDaSaudeRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProfissionalDaSaudeRepositoryImplement implements IProfissionalDaSaudeRepository {

    private final ProfissionalDaSaudeRepository ProfissionalDaSaudeRepository;

    @Autowired
    ProfissionalDaSaudeRepositoryImplement(ProfissionalDaSaudeRepository ProfissionalDaSaudeRepository) {
        this.ProfissionalDaSaudeRepository = ProfissionalDaSaudeRepository;
    }

    @Override
    public ProfissionalDaSaude save(ProfissionalDaSaude ProfissionalDaSaude) {
        return ProfissionalDaSaudeRepository.save(ProfissionalDaSaude);
    }
}