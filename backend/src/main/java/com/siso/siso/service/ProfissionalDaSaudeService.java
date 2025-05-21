package com.siso.siso.service;

import com.siso.siso.model.Especialidade;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import com.siso.siso.service.interfaces.IProfissionalDaSaudeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ProfissionalDaSaudeService implements IProfissionalDaSaudeService {

    private final PasswordEncoder passwordEncoder;
    private final IProfissionalDaSaudeRepository profissionalDaSaudeRepository;
    private final IEspecialidadeRepository especialidadeRepository;

    @Autowired
    ProfissionalDaSaudeService(PasswordEncoder passwordEncoder
                                ,IProfissionalDaSaudeRepository profissionalDaSaudeRepository
                                ,IEspecialidadeRepository especialidadeRepository) {
        this.passwordEncoder = passwordEncoder;
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
        this.especialidadeRepository = especialidadeRepository;
    }

    @Override
    public ProfissionalDaSaude cadastrarProfissionalDaSaude(ProfissionalDaSaude profissionalDaSaude){

        Especialidade especialidade = especialidadeRepository.findById(profissionalDaSaude.getEspecialidade().getId())
                .orElseThrow(() -> new RuntimeException("Especialidade não encontrada"));


        profissionalDaSaude.setSenha(passwordEncoder.encode(profissionalDaSaude.getSenha()));
        profissionalDaSaude.setEspecialidade(especialidade);
        profissionalDaSaudeRepository.save(profissionalDaSaude);
        profissionalDaSaude.setSenha(null);
        return profissionalDaSaude;
    }

    @Override
    public ProfissionalDaSaude visualizarProfissionalDaSaude(Integer id){

        ProfissionalDaSaude profissionalDaSaude = profissionalDaSaudeRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("Profissional não encontrado"));

        profissionalDaSaude.setSenha(null);
        return profissionalDaSaude;
    }
}