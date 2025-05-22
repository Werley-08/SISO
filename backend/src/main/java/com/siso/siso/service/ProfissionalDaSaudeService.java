package com.siso.siso.service;

import com.siso.siso.model.Especialidade;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import com.siso.siso.service.interfaces.IProfissionalDaSaudeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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
        profissionalDaSaude.setRole(Role.PROFISSIONAL_DA_SAUDE);
        profissionalDaSaude.setStatus(Status.ATIVO);
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

    @Override
    public List<ProfissionalDaSaude> visualizarProfissionaisDaSaude(){
        return profissionalDaSaudeRepository.findAll();
    }

    @Override
    public ProfissionalDaSaude editarProfissionalDaSaude(ProfissionalDaSaude profissionalDaSaudeAtual, Integer id, Integer idEspecialidade){
        ProfissionalDaSaude profissionalDaSaude = profissionalDaSaudeRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("Profissional não encontrado"));

        if(!Objects.equals(profissionalDaSaude.getId(), profissionalDaSaudeAtual.getId())){
            throw new IllegalArgumentException("O id do profissional não pode ser atualizado!");
        }

        Especialidade especialidade = especialidadeRepository.findById(idEspecialidade)
                .orElseThrow(() -> new RuntimeException("Especialidade não encontrada"));

        profissionalDaSaudeAtual.setEspecialidade(especialidade);

        return profissionalDaSaudeRepository.save(profissionalDaSaudeAtual);

    }
}