package com.siso.siso.service;

import com.siso.siso.model.Recepcionista;
import com.siso.siso.repository.interfaces.IRecepcionistaRepository;
import com.siso.siso.service.interfaces.IRecepcionistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecepcionistaService implements IRecepcionistaService {

    private final PasswordEncoder passwordEncoder;
    private final IRecepcionistaRepository recepcionistaRepository;

    @Autowired
    RecepcionistaService(PasswordEncoder passwordEncoder, IRecepcionistaRepository recepcionistaRepository){
        this.passwordEncoder = passwordEncoder;
        this.recepcionistaRepository = recepcionistaRepository;
    }

    @Override
    public Recepcionista cadastrarRecepcionista(Recepcionista recepcionista){

        recepcionista.setSenha(passwordEncoder.encode(recepcionista.getSenha()));
        return recepcionistaRepository.save(recepcionista);
    }

    @Override
    public Recepcionista editarRecepcionista(Recepcionista recepcionista, Integer id){

        Recepcionista recepcionistaAtual = recepcionistaRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("Recepcionista não existe no sistema"));

        if(!recepcionistaAtual.getId().equals(recepcionista.getId())){
            throw new IllegalArgumentException("O id da recepcionista não pode ser atualizado!");
        }

        recepcionista.setUsername(recepcionistaAtual.getUsername());
        recepcionista.setSenha(recepcionistaAtual.getSenha());

        return recepcionistaRepository.save(recepcionista);
    }

    @Override
    public Recepcionista visualizarRecepcionista(Integer id){
        return recepcionistaRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("Recepcionista não encontrado"));
    }

    @Override
    public List<Recepcionista> listarRecepcionistas(){
        return recepcionistaRepository.findAll();
    }
}