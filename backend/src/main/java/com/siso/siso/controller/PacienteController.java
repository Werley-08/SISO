package com.siso.siso.controller;

import com.siso.siso.dto.create.PacienteCreateDTO;
import com.siso.siso.dto.response.PacienteResponseDTO;
import com.siso.siso.service.interfaces.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/visualizarTodos")
    public List<PacienteResponseDTO> visualizarPacientes(){
        return toDTO(pacienteService.visualizarPacientes());
    }
}