package com.siso.siso.controller;

import com.siso.siso.dto.create.PacienteCreateDTO;
import com.siso.siso.dto.response.PacienteResponseDTO;
import com.siso.siso.service.interfaces.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.PacienteMapper.toDTO;
import static com.siso.siso.mapper.PacienteMapper.toModel;

@RestController
@RequestMapping("/api/paciente")
public class PacienteController {

    private final IPacienteService pacienteService;

    @Autowired
    public PacienteController(IPacienteService pacienteService){
        this.pacienteService = pacienteService;
    }

    @PostMapping("/cadastrar")
    public PacienteResponseDTO cadastrarPaciente(@RequestBody PacienteCreateDTO pacienteCreateDTO){
        return toDTO(pacienteService.cadastrarPaciente(toModel(pacienteCreateDTO)));
    }
}