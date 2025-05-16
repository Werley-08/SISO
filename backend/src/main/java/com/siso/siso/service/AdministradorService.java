package com.siso.siso.service;

import com.siso.siso.model.Administrador;
import com.siso.siso.repository.interfaces.IAdministradorRepository;
import com.siso.siso.service.interfaces.IAdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdministradorService implements IAdministradorService {

    public final IAdministradorRepository administradorRepository;

    @Autowired
    AdministradorService(IAdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    @Override
    public Administrador cadastrarAdministrador(Administrador administrador){

        administrador.setSenha(new BCryptPasswordEncoder().encode(administrador.getSenha()));
        administradorRepository.save(administrador);
        administrador.setSenha(null);
        return administrador;
    }
}