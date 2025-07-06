package com.siso.siso.repository.implement;

import com.siso.siso.repository.HorarioAtendimentoRepository;
import com.siso.siso.repository.interfaces.IHorarioAtendimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HorarioAtendimentoRepositoryImplement implements IHorarioAtendimentoRepository {

    private final HorarioAtendimentoRepository horarioAtendimentoRepository;

    @Autowired
    public HorarioAtendimentoRepositoryImplement(HorarioAtendimentoRepository horarioAtendimentoRepository) {
        this.horarioAtendimentoRepository = horarioAtendimentoRepository;
    }

    @Override
    public void deleteById(Integer id){
        horarioAtendimentoRepository.deleteById(id);
    }
}