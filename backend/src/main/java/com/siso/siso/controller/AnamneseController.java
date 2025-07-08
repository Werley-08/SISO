package com.siso.siso.controller;

import com.siso.siso.dto.create.AnamneseCreateDTO;
import com.siso.siso.dto.response.AnamneseResponseDTO;
import com.siso.siso.dto.update.AnamneseUpdateDTO;
import com.siso.siso.service.interfaces.IAnamneseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import static com.siso.siso.mapper.AnamneseMapper.*;

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

    @PutMapping("/editar/{idPaciente}")
    public AnamneseResponseDTO editarAnamnese(@PathVariable Integer idPaciente, @RequestBody AnamneseUpdateDTO anamneseUpdateDTO ){
        return toDTO(anamneseService.editarAnamnese(toModel(anamneseUpdateDTO),idPaciente));
    }

    @GetMapping("/visualizar/{idPaciente}")
    public AnamneseResponseDTO visualizarAnamnese(@PathVariable Integer idPaciente){
        return toDTO(anamneseService.visualizarAnamnese(idPaciente));
    }
}