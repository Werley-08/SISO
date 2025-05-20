package com.siso.siso.service;

import com.siso.siso.model.Especialidade;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import com.siso.siso.service.interfaces.IProfissionalDaSaudeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfissionalDaSaudeService implements IProfissionalDaSaudeService {

    private final IProfissionalDaSaudeRepository profissionalDaSaudeRepository;
    private final IEspecialidadeRepository especialidadeRepository;

    @Autowired
    ProfissionalDaSaudeService(IProfissionalDaSaudeRepository profissionalDaSaudeRepository
                                ,IEspecialidadeRepository especialidadeRepository) {
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
        this.especialidadeRepository = especialidadeRepository;
    }

    @Override
    public ProfissionalDaSaude cadastrarProfissionalDaSaude(ProfissionalDaSaude profissionalDaSaude){

        Especialidade especialidade = especialidadeRepository.findById(profissionalDaSaude.getEspecialidade().getId())
                .orElseThrow(() -> new RuntimeException("Especialidade não encontrada"));

        profissionalDaSaude.setEspecialidade(especialidade);
        return profissionalDaSaudeRepository.save(profissionalDaSaude);
    }
}