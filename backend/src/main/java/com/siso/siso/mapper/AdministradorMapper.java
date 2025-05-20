package com.siso.siso.mapper;

import com.siso.siso.dto.AdministradorDTO;
import com.siso.siso.model.Administrador;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

public interface AdministradorMapper {

    static AdministradorDTO toDTO(Administrador administrador){
        return new AdministradorDTO(
                administrador.getNome(),
                administrador.getUsername(),
                administrador.getSenha(),
                administrador.getTelefone(),
                administrador.getRua(),
                administrador.getBairro(),
                administrador.getCidade(),
                administrador.getNumero_casa()
        );
    }

    static Administrador toModel(AdministradorDTO createAdministradorDTO){
         return new Administrador(
                 null,
                 createAdministradorDTO.getNome(),
                 createAdministradorDTO.getUsername(),
                 createAdministradorDTO.getSenha(),
                 Role.ADMIN,
                 Status.ATIVO,
                 createAdministradorDTO.getTelefone(),
                 createAdministradorDTO.getRua(),
                 createAdministradorDTO.getBairro(),
                 createAdministradorDTO.getCidade(),
                 createAdministradorDTO.getNumero_casa()
         );
    }
}