package com.siso.siso.controller;

import com.siso.siso.dto.EspecialidadeDTO;
import com.siso.siso.mapper.create.EspecialidadeMapper;
import com.siso.siso.model.Especialidade;
import com.siso.siso.service.interfaces.IEspecialidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        Especialidade especialidade = EspecialidadeMapper.toModel(especialidadeDTO);

        Especialidade especialidadeCadastrada = especialidadeService.cadastrarEspecialidade(especialidade);
        return EspecialidadeMapper.toDTO(especialidadeCadastrada);
    }
}
