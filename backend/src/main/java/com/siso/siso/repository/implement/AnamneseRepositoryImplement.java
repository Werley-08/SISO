package com.siso.siso.repository.implement;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Paciente;
import com.siso.siso.repository.AnamneseRepository;
import com.siso.siso.repository.interfaces.IAnamneseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class AnamneseRepositoryImplement implements IAnamneseRepository {

    private final AnamneseRepository anamneseRepository;

    @Autowired
    AnamneseRepositoryImplement(AnamneseRepository anamneseRepository){
        this.anamneseRepository = anamneseRepository;
    }

    @Override
    public Anamnese save(Anamnese anamnese) {
        return anamneseRepository.save(anamnese);
    }

    @Override
    public Optional<Anamnese> findByPaciente(Paciente paciente){
        return anamneseRepository.findByPaciente(paciente);
    }
}