package com.siso.siso.controller;


import com.siso.siso.dto.create.AnamneseCreateDTO;
import com.siso.siso.dto.response.AnamneseResponseDTO;
import com.siso.siso.service.interfaces.IAnamneseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.AnamneseMapper.toDTO;
import static com.siso.siso.mapper.AnamneseMapper.toModel;

@RestController
@RequestMapping("api/anamnese")
public class AnamneseController {
    private final IAnamneseService anamneseService;

    @Autowired
    AnamneseController(IAnamneseService anamneseService){
        this.anamneseService = anamneseService;
    }

    @PostMapping("/cadastrar")
    public AnamneseResponseDTO cadastrarAnamnese(@RequestBody AnamneseCreateDTO anamneseCreateDTO){
        return toDTO(anamneseService.cadastrarAnamnese(toModel(anamneseCreateDTO)));
    }
}
