package com.siso.siso.controller;

import com.siso.siso.dto.create.ProcedimentoCreateDTO;
import com.siso.siso.dto.response.ProcedimentoResponseDTO;
import com.siso.siso.service.interfaces.IProcedimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.ProcedimentoMapper.toDTO;
import static com.siso.siso.mapper.ProcedimentoMapper.toModel;

@RestController
@RequestMapping("/api/procedimento")
public class ProcedimentoController {
    private final IProcedimentoService procedimentoService;

    @Autowired
    public ProcedimentoController(IProcedimentoService procedimentoService){
        this.procedimentoService = procedimentoService;
    }

    @PostMapping("/cadastrar")
    public ProcedimentoResponseDTO cadastrarProcedimento(@RequestBody ProcedimentoCreateDTO procedimentoCreateDTO){
        return toDTO(procedimentoService.cadastrarProcedimento(toModel(procedimentoCreateDTO)));
    }

}
