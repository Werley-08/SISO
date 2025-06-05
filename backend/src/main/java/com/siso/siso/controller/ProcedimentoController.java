package com.siso.siso.controller;

import com.siso.siso.dto.create.ProcedimentoCreateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/procedimento")
public class ProcedimentoController {
    private final IProcedimentoService procedimentoService;

    @Autowired
    public ProcedimentoController(IProcedimentoService procedimentoService){
        this.procedimentoService = procedimentoService;
    }

    public ProcedimentoCreateDTO cadastrarProcedimento(ProcedimentoCreateDTO procedimentoCreateDTO){
        return toModel()
    }

}
