package com.siso.siso.controller;

import com.siso.siso.dto.create.SessaoCreateDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static com.siso.siso.mapper.SessaoMapper.toModel;
import static com.siso.siso.mapper.TratamentoMapper.toDTO;

@RestController
@RequestMapping("/api/sessao")
public class SessaoController {

    private final ISessaoService sessaoService;

    @Autowired
    public SessaoController(ISessaoService sessaoService) {
        this.sessaoService = sessaoService;
    }

    @PostMapping("/cadastrar/{id_tratamento}")
    public TratamentoResponseDTO cadastrarTratamento(@RequestBody SessaoCreateDTO sessaoCreateDTO, @PathVariable Integer id_tratamento) {
        return toDTO(sessaoService.cadastrarSessao(toModel(sessaoCreateDTO), id_tratamento));
    }
}