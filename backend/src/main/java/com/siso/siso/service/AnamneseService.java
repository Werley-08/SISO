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

    @Override
    public Anamnese cadastrarAnamnese(Anamnese anamnese){
        Paciente paciente = pacienteRepository.findById(anamnese.getPaciente().getId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));



        anamnese.setPaciente(paciente);
        return anamneseRepository.save(anamnese);
    }

    @Override
    public Anamnese editarAnamnese(Anamnese anamnese, Integer idPaciente){
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        Anamnese anamneseAtual = anamneseRepository.findByPaciente(paciente)
                .orElseThrow(() -> new  RuntimeException("anamnese não existe no sistema"));


        if(!anamneseAtual.getId().equals(anamnese.getId())){
            throw new IllegalArgumentException("O id da anamnese não pode ser atualizado!");
        }

        return anamneseRepository.save(anamnese);
    }

    @Override
    public Anamnese visualizarAnamnese(Integer idPaciente){
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        return anamneseRepository.findByPaciente(paciente)
                .orElseThrow(() -> new  RuntimeException("anamnese não encontrada"));
    }
}