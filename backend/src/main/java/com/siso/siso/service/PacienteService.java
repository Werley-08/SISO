package com.siso.siso.service;

import com.siso.siso.model.Paciente;
import com.siso.siso.model.Responsavel;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.repository.interfaces.IResponsavelRepository;
import com.siso.siso.service.interfaces.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

@Service
public class PacienteService implements IPacienteService {

    private final IPacienteRepository pacienteRepository;
    private final IResponsavelRepository responsavelRepository;

    @Autowired
    public PacienteService(IPacienteRepository pacienteRepository, IResponsavelRepository responsavelRepository) {
        this.pacienteRepository = pacienteRepository;
        this.responsavelRepository = responsavelRepository;
    }

    @Override
    public Paciente cadastrarPaciente(Paciente paciente) {
        LocalDate dataAtual = LocalDate.now();
        int idade = Period.between(paciente.getData_nascimento(), dataAtual).getYears();

        if(idade < 18 && paciente.getResponsavel() == null) {
            throw new IllegalArgumentException("Um paciente menor de idade não pode ser cadastrado sem um responsável associado!");
        }

        Responsavel responsavel = paciente.getResponsavel();
        if (responsavel != null) {
            paciente.setResponsavel(responsavelRepository.save(responsavel));
        }
        return pacienteRepository.save(paciente);
    }

    @Override
    public List<Paciente> visualizarPacientes(){
        return pacienteRepository.findAll();
    }
}