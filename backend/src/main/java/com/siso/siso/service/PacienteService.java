package com.siso.siso.service;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Paciente;
import com.siso.siso.model.Responsavel;
import com.siso.siso.model.enums.ClassificacaoEtaria;
import com.siso.siso.repository.interfaces.IAnamneseRepository;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.repository.interfaces.IResponsavelRepository;
import com.siso.siso.service.interfaces.IAnamneseService;
import com.siso.siso.service.interfaces.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;

@Service
public class PacienteService implements IPacienteService {

    private final IPacienteRepository pacienteRepository;
    private final IResponsavelRepository responsavelRepository;
    private final IAnamneseRepository anamneseRepository;

    @Autowired
    public PacienteService(IPacienteRepository pacienteRepository,
                           IResponsavelRepository responsavelRepository,
                           IAnamneseRepository anamneseRepository) {
        this.pacienteRepository = pacienteRepository;
        this.responsavelRepository = responsavelRepository;
        this.anamneseRepository = anamneseRepository;
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

    @Override
    public Paciente editarPaciente(Paciente paciente, Integer id) {

        Paciente pacienteAtual = pacienteRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("Paciente não existe no sistema"));

        if(!pacienteAtual.getId().equals(paciente.getId())){
            throw new IllegalArgumentException("O id do paciente não pode ser atualizado!");
        }

        if (paciente.getClassificacao_etaria().equals(ClassificacaoEtaria.MENOR) && paciente.getResponsavel() == null) {
            throw new IllegalArgumentException("Um paciente menor de idade não pode ser editado sem um responsável associado!");
        }

        Optional<Anamnese> anamnese = anamneseRepository.findByPaciente(paciente);
        if (anamnese.isPresent()) {
            paciente.setAnamnese(anamnese.get());
        }

        Responsavel responsavel = paciente.getResponsavel();
        if (responsavel != null) {
            paciente.setResponsavel(responsavelRepository.save(responsavel));
        }
        return pacienteRepository.save(paciente);
    }
}