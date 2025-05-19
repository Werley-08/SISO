package com.siso.siso.controller;

import com.siso.siso.dto.EspecialidadeDTO;
import com.siso.siso.model.Especialidade;
import com.siso.siso.service.interfaces.IEspecialidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static com.siso.siso.mapper.create.EspecialidadeMapper.toDTO;
import static com.siso.siso.mapper.create.EspecialidadeMapper.toModel;

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
        return toDTO(especialidadeService.cadastrarEspecialidade(toModel(especialidadeDTO)))
       
    }

    @PutMapping("/editar")
    public EspecialidadeDTO editarEspecialidade(@RequestBody EspecialidadeDTO especialidadeDTO) {
        Especialidade especialidade = toModel(especialidadeDTO);

        Especialidade especialidadeEditada = especialidadeService.editarEspecialidade(especialidade);
        return toDTO(especialidadeEditada);
    }
}
