package com.siso.siso.repository.implement;

import com.siso.siso.repository.UsuarioRepository;
import com.siso.siso.repository.interfaces.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioRepositoryImplement implements IUsuarioRepository {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioRepositoryImplement(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails findByUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }
}