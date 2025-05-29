package com.siso.siso.controller;

import com.siso.siso.dto.RecepcionistaDTO;
import com.siso.siso.dto.response.RecepcionistaResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.RecepcionistaMapper.toDTO;
import static com.siso.siso.mapper.RecepcionistaMapper.toModel;
import com.siso.siso.service.interfaces.IRecepcionistaService;

@RestController
@RequestMapping("/api/recepcionista")
public class RecepcionistaController {

    private final IRecepcionistaService recepcionistaService;

    @Autowired
    RecepcionistaController(IRecepcionistaService recepcionistaService){
        this.recepcionistaService = recepcionistaService;
    }

    @PostMapping("/cadastrar")
    public RecepcionistaResponseDTO cadastrarRecepcionista(@RequestBody RecepcionistaDTO recepcionistaDTO){
        return toDTO(recepcionistaService.cadastrarRecepcionista(toModel(recepcionistaDTO)));
    }
}
