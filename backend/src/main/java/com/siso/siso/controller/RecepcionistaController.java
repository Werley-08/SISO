package com.siso.siso.controller;

import com.siso.siso.dto.create.RecepcionistaCreateDTO;
import com.siso.siso.dto.response.RecepcionistaResponseDTO;
import com.siso.siso.service.interfaces.IRecepcionistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.siso.siso.mapper.RecepcionistaMapper.toDTO;
import static com.siso.siso.mapper.RecepcionistaMapper.toModel;

@RestController
@RequestMapping("/api/recepcionista")
public class RecepcionistaController {

    private final IRecepcionistaService recepcionistaService;

    @Autowired
    RecepcionistaController(IRecepcionistaService recepcionistaService){
        this.recepcionistaService = recepcionistaService;
    }

    @PostMapping("/cadastrar")
    public RecepcionistaResponseDTO cadastrarRecepcionista(@RequestBody RecepcionistaCreateDTO recepcionistaDTO){
        return toDTO(recepcionistaService.cadastrarRecepcionista(toModel(recepcionistaDTO)));
    }

    @GetMapping("/visualizarTodos")
    public List<RecepcionistaResponseDTO> visualizarRecepcionistas(){
        return toDTO(recepcionistaService.listarRecepcionistas());
    }
}
