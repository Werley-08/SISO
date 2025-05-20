package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Administrador;
import org.springframework.security.core.userdetails.UserDetails;

public interface IAdministradorRepository{

    Administrador save(Administrador administrador);
    UserDetails findByUsername(String username);
}