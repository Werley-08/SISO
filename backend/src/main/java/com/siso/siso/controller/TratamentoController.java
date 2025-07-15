package com.siso.siso.controller;

import com.siso.siso.dto.create.TratamentoCreateDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.service.interfaces.ITratamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.TratamentoMapper.toDTO;
import static com.siso.siso.mapper.TratamentoMapper.toModel;

@RestController
@RequestMapping("/api/tratamento")
public class TratamentoController {

    private final ITratamentoService tratamentoService;

    @Autowired
    public TratamentoController(ITratamentoService tratamentoService) {
        this.tratamentoService = tratamentoService;
    }

    @PostMapping("/cadastrar")
    public TratamentoResponseDTO cadastrarTratamento(@RequestBody TratamentoCreateDTO tratamentoCreateDTO) {
        return toDTO(tratamentoService.cadastrarTratamento(toModel(tratamentoCreateDTO)));
    }
}