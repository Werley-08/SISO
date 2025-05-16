package com.siso.siso.repository.implement;

import com.siso.siso.model.Administrador;
import com.siso.siso.repository.AdministradorRepository;
import com.siso.siso.repository.interfaces.IAdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public class AdministradorRepositoryImplement implements IAdministradorRepository {

    private final AdministradorRepository administradorRepository;

    @Autowired
    AdministradorRepositoryImplement(AdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    @Override
    public Administrador save(Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    @Override
    public UserDetails findByUsername(String username) {
        return administradorRepository.findByUsername(username);
    }
}