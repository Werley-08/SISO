package com.siso.siso.service;

import com.siso.siso.model.Especialidade;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import com.siso.siso.service.interfaces.IEspecialidadeService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class EspecialidadeService implements IEspecialidadeService {
    private final IEspecialidadeRepository especialidadeRepository;

    @Autowired
    EspecialidadeService(IEspecialidadeRepository especialidadeRepository) {
        this.especialidadeRepository = especialidadeRepository;
    }

    @Override
    public Especialidade cadastrarEspecialidade(Especialidade especialidade) {
        if(especialidadeRepository.findByNome(especialidade.getNome()).isPresent()){
            throw new IllegalArgumentException("Já existe uma especialidade cadastrada com esse nome");
        }

        return especialidadeRepository.save(especialidade);
    }

    @Override
    public Especialidade editarEspecialidade(Integer id, Especialidade especialidadeAtual) {

        Especialidade especialidade = especialidadeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Não existe uma especialidade cadastrada com esse id."));

        if(!Objects.equals(especialidade.getId(), especialidadeAtual.getId())){
            throw new IllegalArgumentException("O id da especialidade não pode ser atualizado");
        }

        return especialidadeRepository.save(especialidadeAtual);
    }

    @Override
    public List<Especialidade> visualizarEspecialidades() {
        return especialidadeRepository.findAll();
    }

}