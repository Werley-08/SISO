package com.siso.siso.mapper.create;

import com.siso.siso.dto.create.CreateAdministradorDTO;
import com.siso.siso.model.Administrador;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

public interface CreateAdministradorMapper{

    static CreateAdministradorDTO toDTO(Administrador administrador){
        return new CreateAdministradorDTO(
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

    static Administrador toModel(CreateAdministradorDTO createAdministradorDTO){
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