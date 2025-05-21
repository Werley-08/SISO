package com.siso.siso.repository.implement;

import com.siso.siso.model.Especialidade;
import com.siso.siso.repository.EspecialidadeRepository;
import com.siso.siso.repository.interfaces.IEspecialidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class EspecialidadeRepositoryImplement implements IEspecialidadeRepository {

    private final EspecialidadeRepository especialidadeRepository;

    @Autowired
    public EspecialidadeRepositoryImplement(EspecialidadeRepository especialidadeRepository) {
        this.especialidadeRepository = especialidadeRepository;
    }

    @Override
    public Especialidade save(Especialidade especialidade) {
        return especialidadeRepository.save(especialidade);
    }

    @Override
    public Optional<Especialidade> findById(Integer id){
        return especialidadeRepository.findById(id);
    }

    @Override
    public Optional<Especialidade> findByNome(String nome){
        return especialidadeRepository.findByNome(nome);
    }

    @Override
    public List<Especialidade> findAll(){
        return especialidadeRepository.findAll();
    }
}
