package com.siso.siso.repository.implement;

import com.siso.siso.model.Procedimento;
import com.siso.siso.repository.ProcedimentoRepository;
import com.siso.siso.repository.interfaces.IProcedimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProcedimentoRepositoryImplement implements IProcedimentoRepository {
    private final ProcedimentoRepository procedimentoRepository;

    @Autowired
    public ProcedimentoRepositoryImplement(ProcedimentoRepository procedimentoRepository) {
        this.procedimentoRepository = procedimentoRepository;
    }

    @Override
    public Procedimento save(Procedimento procedimento) {
        return procedimentoRepository.save(procedimento);
    }

    @Override
    public Optional<Procedimento> findByNome(String nome) {
        return procedimentoRepository.findByNome(nome);
    }

    @Override
    public List<Procedimento> findAll() { return procedimentoRepository.findAll(); }
}