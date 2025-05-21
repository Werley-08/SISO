package com.siso.siso.controller;

import com.siso.siso.dto.EspecialidadeDTO;
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
    public EspecialidadeDTO cadastrarEspecialidade(@RequestBody EspecialidadeDTO especialidadeDTO) {
        return toDTO(especialidadeService.cadastrarEspecialidade(toModel(especialidadeDTO)));

    }

    @PutMapping("/editar/{id}")
    public EspecialidadeDTO editarEspecialidade(@PathVariable int id , @RequestBody EspecialidadeDTO especialidadeDTO) {
        return toDTO(especialidadeService.editarEspecialidade(id, toModel(especialidadeDTO)));
    }

    @GetMapping("/visualizar")
    public List<EspecialidadeDTO> visualizarEspecialidade() {
        return toDTO(especialidadeService.visualizarEspecialidade());
    }
}
