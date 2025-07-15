package com.siso.siso.service;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;
import com.siso.siso.repository.interfaces.ITratamentoRepository;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessaoService implements ISessaoService {

    private final ITratamentoRepository tratamentoRepository;

    @Autowired
    public SessaoService(ITratamentoRepository tratamentoRepository) {
        this.tratamentoRepository = tratamentoRepository;
    }

    @Override
    public Tratamento cadastrarSessao(Sessao sessao, Integer id_tratamento) {

        Tratamento tratamento = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(() -> new  RuntimeException("Tratamento não existe no sistema"));

        sessao.setTratamento(tratamento);
        tratamento.getSessoes().add(sessao);
        return tratamentoRepository.save(tratamento);
    }
}