package com.siso.siso.repository.implement;

import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.ProfissionalDaSaudeRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProfissionalDaSaudeRepositoryImplement implements IProfissionalDaSaudeRepository {

    private final ProfissionalDaSaudeRepository ProfissionalDaSaudeRepository;
    private final ProfissionalDaSaudeRepository profissionalDaSaudeRepository;

    @Autowired
    ProfissionalDaSaudeRepositoryImplement(ProfissionalDaSaudeRepository ProfissionalDaSaudeRepository, ProfissionalDaSaudeRepository profissionalDaSaudeRepository) {
        this.ProfissionalDaSaudeRepository = ProfissionalDaSaudeRepository;
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
    }

    @Override
    public ProfissionalDaSaude save(ProfissionalDaSaude ProfissionalDaSaude) {
        return ProfissionalDaSaudeRepository.save(ProfissionalDaSaude);
    }

    @Override
    public Optional<ProfissionalDaSaude> findById(Integer id) {
        return profissionalDaSaudeRepository.findById(id);
    }

    @Override
    public List<ProfissionalDaSaude> findAll() {
        return profissionalDaSaudeRepository.findAll();
    }
}