package com.siso.siso.repository.implement;

import com.siso.siso.model.Responsavel;
import com.siso.siso.repository.ResponsavelRepository;
import com.siso.siso.repository.interfaces.IResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ResponsavelRepositoryImplement implements IResponsavelRepository {

    private final ResponsavelRepository responsavelRepository;

    @Autowired
    public ResponsavelRepositoryImplement(ResponsavelRepository responsavelRepository) {
        this.responsavelRepository = responsavelRepository;
    }

    @Override
    public Responsavel save(Responsavel responsavel) {
        return responsavelRepository.save(responsavel);
    }
}