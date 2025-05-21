package com.siso.siso.controller;

import com.siso.siso.dto.ProfissionalDaSaudeDTO;
import com.siso.siso.service.interfaces.IProfissionalDaSaudeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.siso.siso.mapper.ProfissionalDaSaudeMapper.toDTO;
import static com.siso.siso.mapper.ProfissionalDaSaudeMapper.toModel;

@RestController
@RequestMapping("api/profissionalDaSaude")
public class ProfissionalDaSaudeController{

    private final IProfissionalDaSaudeService profissionalDaSaudeService;

    @Autowired
    ProfissionalDaSaudeController(IProfissionalDaSaudeService profissionalDaSaudeService){
        this.profissionalDaSaudeService = profissionalDaSaudeService;
    }

    @PostMapping("/cadastrar")
    public ProfissionalDaSaudeDTO cadastrarProfissionalDaSaude(@RequestBody ProfissionalDaSaudeDTO profissionalDaSaudeDTO){
        return toDTO(profissionalDaSaudeService.cadastrarProfissionalDaSaude(toModel(profissionalDaSaudeDTO)));
    }

    @GetMapping("/visualizar/{id}")
    public ProfissionalDaSaudeDTO visualizarProfissionalDaSaude(@PathVariable Integer id){
        return toDTO(profissionalDaSaudeService.visualizarProfissionalDaSaude(id));
    }

    @GetMapping("/visualizarTodos")
    public List<ProfissionalDaSaudeDTO> visualizarProfissionalDaSaude(){
        return toDTO(profissionalDaSaudeService.visualizarProfissionaisDaSaude());
    }
}