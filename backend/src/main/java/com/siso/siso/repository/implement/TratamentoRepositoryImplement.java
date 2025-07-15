package com.siso.siso.repository.implement;

import com.siso.siso.model.Tratamento;
import com.siso.siso.repository.TratamentoRepository;
import com.siso.siso.repository.interfaces.ITratamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class TratamentoRepositoryImplement implements ITratamentoRepository {

    private final TratamentoRepository tratamentoRepository;

    @Autowired
    public TratamentoRepositoryImplement(TratamentoRepository tratamentoRepository) {
        this.tratamentoRepository = tratamentoRepository;
    }

    @Override
    public Tratamento save(Tratamento tratamento) {
        return tratamentoRepository.save(tratamento);
    }

    @Override
    public Optional<Tratamento> findById(Integer id) {
        return tratamentoRepository.findById(id);
    }
}