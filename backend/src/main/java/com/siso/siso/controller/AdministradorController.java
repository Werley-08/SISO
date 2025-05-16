package com.siso.siso.controller;

import com.siso.siso.dto.create.CreateAdministradorDTO;
import com.siso.siso.service.interfaces.IAdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.create.CreateAdministradorMapper.toDTO;
import static com.siso.siso.mapper.create.CreateAdministradorMapper.toModel;

@RestController
@RequestMapping("api/administrador")
public class AdministradorController{

    private final IAdministradorService administradorService;

    @Autowired
    AdministradorController(IAdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    @PostMapping("/cadastrar")
    public CreateAdministradorDTO cadastrarUsuario(@RequestBody CreateAdministradorDTO createAdministradorDTO){
        return toDTO(administradorService.cadastrarAdministrador(toModel(createAdministradorDTO)));
    }
}