package com.siso.siso.controller;

import com.siso.siso.dto.create.ProcedimentoCreateDTO;
import com.siso.siso.dto.response.ProcedimentoResponseDTO;
import com.siso.siso.dto.update.ProcedimentoUpdateDTO;
import com.siso.siso.service.interfaces.IProcedimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/visualizarTodos")
    public List<ProcedimentoResponseDTO> visualizarProcedimentos(){
        return toDTO(procedimentoService.visualizarProcedimentos());
    }

    @PutMapping("/editar/{id}")
    public ProcedimentoResponseDTO editarProcedimento(@RequestBody ProcedimentoUpdateDTO procedimento, @PathVariable Integer id){
        return toDTO(procedimentoService.editarProcedimento(toModel(procedimento), id));
    }
}