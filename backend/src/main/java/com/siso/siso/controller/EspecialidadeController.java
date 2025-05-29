package com.siso.siso.controller;

import com.siso.siso.dto.create.EspecialidadeCreateDTO;
import com.siso.siso.dto.response.EspecialidadeResponseDTO;
import com.siso.siso.dto.update.EspecialidadeUpdateDTO;
import com.siso.siso.service.interfaces.IEspecialidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.siso.siso.mapper.EspecialidadeMapper.toDTO;
import static com.siso.siso.mapper.EspecialidadeMapper.toModel;

@RestController
@RequestMapping("api/especialidade")
public class EspecialidadeController {

    private final IEspecialidadeService especialidadeService;

    @Autowired
    public EspecialidadeController(IEspecialidadeService especialidadeService){
        this.especialidadeService = especialidadeService;
    }

    @PostMapping("/cadastrar")
    public EspecialidadeResponseDTO cadastrarEspecialidade(@RequestBody EspecialidadeCreateDTO especialidadeDTO) {
        return toDTO(especialidadeService.cadastrarEspecialidade(toModel(especialidadeDTO)));
    }

    @PutMapping("/editar/{id}")
    public EspecialidadeResponseDTO editarEspecialidade(@PathVariable Integer id , @RequestBody EspecialidadeUpdateDTO especialidadeDTO) {
        return toDTO(especialidadeService.editarEspecialidade(id, toModel(especialidadeDTO)));
    }

    @GetMapping("/visualizarTodos")
    public List<EspecialidadeResponseDTO> visualizarEspecialidades() {
        return toDTO(especialidadeService.visualizarEspecialidades());
    }
}