package com.siso.siso.service;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Paciente;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.service.interfaces.IAnamneseService;
import com.siso.siso.repository.interfaces.IAnamneseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnamneseService implements IAnamneseService {

    private final IAnamneseRepository anamneseRepository;
    private final IPacienteRepository pacienteRepository;

    @Autowired
    AnamneseService(IAnamneseRepository anamneseRepository, IPacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
        this.anamneseRepository = anamneseRepository;
    }

    public Anamnese cadastrarAnamnese(Anamnese anamnese){
        Paciente paciente = pacienteRepository.findById(anamnese.getIdPaciente().getId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        return anamneseRepository.save(anamnese);

    }


}
