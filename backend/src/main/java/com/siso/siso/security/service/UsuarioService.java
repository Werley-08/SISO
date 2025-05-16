package com.siso.siso.security.service;

import com.siso.siso.repository.interfaces.IAdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService{

    private final IAdministradorRepository administradorRepository;

    @Autowired
    public UsuarioService(IAdministradorRepository administradorRepository){
        this.administradorRepository = administradorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return administradorRepository.findByUsername(username);
    }
}