package com.siso.siso.service;

import com.siso.siso.model.Procedimento;
import com.siso.siso.model.Procedimento;
import com.siso.siso.repository.interfaces.IProcedimentoRepository;
import com.siso.siso.service.interfaces.IProcedimentoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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

    @Override
    public List<Procedimento> visualizarProcedimentos() {
        return procedimentoRepository.findAll();
    }

    @Override
    public Procedimento editarProcedimento(Procedimento procedimento, Integer id) {

        Procedimento procedimentoAtual = procedimentoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Não existe um procedimento cadastrado com esse id."));

        if(!Objects.equals(procedimentoAtual.getId(), procedimento.getId())){
            throw new IllegalArgumentException("O id do procedimento não pode ser atualizado");
        }

        return procedimentoRepository.save(procedimento);
    }
}