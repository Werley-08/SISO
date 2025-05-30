package com.siso.siso.controller;

import com.siso.siso.dto.create.ProfissionalDaSaudeCreateDTO;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;
import com.siso.siso.dto.update.ProfissionalDaSaudeUpdateDTO;
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
    public ProfissionalDaSaudeResponseDTO cadastrarProfissionalDaSaude(@RequestBody ProfissionalDaSaudeCreateDTO profissionalDaSaudeDTO){
        return toDTO(profissionalDaSaudeService.cadastrarProfissionalDaSaude(toModel(profissionalDaSaudeDTO)));
    }

    @GetMapping("/visualizar/{id}")
    public ProfissionalDaSaudeResponseDTO visualizarProfissionalDaSaude(@PathVariable Integer id){
        return toDTO(profissionalDaSaudeService.visualizarProfissionalDaSaude(id));
    }

    @GetMapping("/visualizarTodos")
    public List<ProfissionalDaSaudeResponseDTO> visualizarProfissionalDaSaude(){
        return toDTO(profissionalDaSaudeService.visualizarProfissionaisDaSaude());
    }

    @PutMapping("/editar/{id}")
    public ProfissionalDaSaudeResponseDTO editarProfissionalDaSaude(@PathVariable Integer id, @RequestBody ProfissionalDaSaudeUpdateDTO profissionalDaSaude){
        return toDTO(profissionalDaSaudeService.editarProfissionalDaSaude(toModel(profissionalDaSaude),id));
    }
}