package com.siso.siso.service;

import com.siso.siso.model.Procedimento;
import com.siso.siso.repository.interfaces.IProcedimentoRepository;
import com.siso.siso.service.interfaces.IProcedimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProcedimentoService implements IProcedimentoService {

    private final IProcedimentoRepository procedimentoRepository;

    @Autowired
    public ProcedimentoService(IProcedimentoRepository procedimentoRepository) {
        this.procedimentoRepository = procedimentoRepository;
    }

    @Override
    public Procedimento cadastrarProcedimento(Procedimento procedimento) {
        if(procedimentoRepository.findByNome(procedimento.getNome()).isPresent()){
            throw new IllegalArgumentException("Já existe um procedimento cadastrado com esse nome");
        }

        return procedimentoRepository.save(procedimento);
    }


}
