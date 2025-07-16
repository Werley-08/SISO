package com.siso.siso.service;

import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;
import com.siso.siso.repository.interfaces.ISessaoRepository;
import com.siso.siso.repository.interfaces.ITratamentoRepository;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SessaoService implements ISessaoService {

    private final ITratamentoRepository tratamentoRepository;
    private final ISessaoRepository sessaoRepository;

    @Autowired
    public SessaoService(ITratamentoRepository tratamentoRepository,
                         ISessaoRepository sessaoRepository) {
        this.tratamentoRepository = tratamentoRepository;
        this.sessaoRepository = sessaoRepository;
    }

    @Override
    public Tratamento cadastrarSessao(Sessao sessao, Integer id_tratamento) {

        Tratamento tratamento = tratamentoRepository.findById(id_tratamento)
                .orElseThrow(() -> new  RuntimeException("Tratamento não existe no sistema"));

        sessao.setTratamento(tratamento);
        tratamento.getSessoes().add(sessao);
        return tratamentoRepository.save(tratamento);
    }

    @Override
    public List<Sessao> visualizarSessao(LocalDate data){
        return sessaoRepository.findByData(data);
    }
}