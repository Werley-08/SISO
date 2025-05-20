package com.siso.siso.repository.interfaces;

import org.springframework.security.core.userdetails.UserDetails;

public interface IUsuarioRepository{

    UserDetails findByUsername(String username);
}