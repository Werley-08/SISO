package com.siso.siso.service;

import com.siso.siso.model.Administrador;
import com.siso.siso.repository.interfaces.IAdministradorRepository;
import com.siso.siso.service.interfaces.IAdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdministradorService implements IAdministradorService {

    private final IAdministradorRepository administradorRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    AdministradorService(IAdministradorRepository administradorRepository, PasswordEncoder passwordEncoder) {
        this.administradorRepository = administradorRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Administrador cadastrarAdministrador(Administrador administrador) {
        administrador.setSenha(passwordEncoder.encode(administrador.getSenha()));
        administradorRepository.save(administrador);
        administrador.setSenha(null);
        return administrador;
    }
}