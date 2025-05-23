package com.siso.siso.repository;

import com.siso.siso.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

    UserDetails findByUsername(String username);
}