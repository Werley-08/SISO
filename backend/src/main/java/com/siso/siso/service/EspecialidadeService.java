package com.siso.siso.service;

import com.siso.siso.model.Especialidade;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import com.siso.siso.service.interfaces.IEspecialidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EspecialidadeService implements IEspecialidadeService {
    private final IEspecialidadeRepository especialidadeRepository;

    @Autowired
    EspecialidadeService(IEspecialidadeRepository especialidadeRepository) {
        this.especialidadeRepository = especialidadeRepository;
    }

    @Override
    public Especialidade cadastrarEspecialidade(Especialidade especialidade) {
        if(especialidadeRepository.findById(especialidade.getNome()).isPresent()){
            throw new IllegalArgumentException("Já existe um Especialidade cadastrada com esse nome");
        }

        return especialidadeRepository.save(especialidade);
    }

    @Override
    public Especialidade editarEspecialidade(Especialidade especialidade) {
        if(!especialidadeRepository.findById(especialidade.getNome()).isPresent()){
            throw new IllegalArgumentException("Não existe especialidade cadastrada com esse nome");
        }

    }


}
