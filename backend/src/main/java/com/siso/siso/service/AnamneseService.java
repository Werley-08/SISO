package com.siso.siso.service;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Especialidade;
import com.siso.siso.model.Paciente;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.interfaces.IPacienteRepository;
import com.siso.siso.service.interfaces.IAnamneseService;
import com.siso.siso.repository.interfaces.IAnamneseRepository;
import org.hibernate.sql.ast.tree.expression.Over;
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
        Paciente paciente = pacienteRepository.findById(anamnese.getIdPaciente().getId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));

        return anamneseRepository.save(anamnese);
    }

    @Override
    public Anamnese editarAnamnese(Anamnese anamnese, Integer id){
        Anamnese anamneseAtual = anamneseRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("anamnese não existe no sistema"));


        if(!anamneseAtual.getId().equals(anamnese.getId())){
            throw new IllegalArgumentException("O id da anamnese não pode ser atualizado!");
        }

        return anamneseRepository.save(anamnese);
    }

    @Override
    public Anamnese visualizarAnamnese(Integer id){
        return anamneseRepository.findById(id)
                .orElseThrow(() -> new  RuntimeException("anamnese não encontrada"));
    }

}
