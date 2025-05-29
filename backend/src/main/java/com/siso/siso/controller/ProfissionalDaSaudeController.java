package com.siso.siso.controller;

import com.siso.siso.dto.ProfissionalDaSaudeDTO;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;
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
    public ProfissionalDaSaudeResponseDTO cadastrarProfissionalDaSaude(@RequestBody ProfissionalDaSaudeDTO profissionalDaSaudeDTO){
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

    @PutMapping("/editar/{id}/{id_especialidade}")
    public ProfissionalDaSaudeResponseDTO editarProfissionalDaSaude(@PathVariable Integer id, @PathVariable Integer id_especialidade, @RequestBody ProfissionalDaSaudeDTO profissionalDaSaude){
        return toDTO(profissionalDaSaudeService.editarProfissionalDaSaude(toModel(profissionalDaSaude),id, id_especialidade));
    }
}