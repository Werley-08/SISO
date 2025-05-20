package com.siso.siso.controller;

import com.siso.siso.dto.AdministradorDTO;
import com.siso.siso.service.interfaces.IAdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.siso.siso.mapper.AdministradorMapper.toDTO;
import static com.siso.siso.mapper.AdministradorMapper.toModel;

@RestController
@RequestMapping("api/administrador")
public class AdministradorController{

    private final IAdministradorService administradorService;

    @Autowired
    AdministradorController(IAdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    @PostMapping("/cadastrar")
    public AdministradorDTO cadastrarUsuario(@RequestBody AdministradorDTO createAdministradorDTO){
        return toDTO(administradorService.cadastrarAdministrador(toModel(createAdministradorDTO)));
    }
}