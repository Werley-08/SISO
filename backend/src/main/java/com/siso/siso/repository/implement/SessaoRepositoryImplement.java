package com.siso.siso.repository.implement;

import com.siso.siso.model.Sessao;
import com.siso.siso.repository.SessaoRepository;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class SessaoRepositoryImplement implements ISessaoRepository {

    private final SessaoRepository sessaoRepository;

    @Autowired
    public SessaoRepositoryImplement(SessaoRepository sessaoRepository) {
        this.sessaoRepository = sessaoRepository;
    }

    @Override
    public List<Sessao> findByData(LocalDate date){
        return sessaoRepository.findByData(date);
    }

    @Override
    public List<Sessao> findByDataAndProfissionalId(@Param("data") LocalDate data, @Param("id_profissional") Integer id_profissional){
        return sessaoRepository.findByDataAndProfissionalId(data, id_profissional);
    }
}