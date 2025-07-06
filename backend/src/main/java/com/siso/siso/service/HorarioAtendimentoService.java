package com.siso.siso.service;

import com.siso.siso.model.HorarioAtendimento;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.repository.interfaces.IProfissionalDaSaudeRepository;
import com.siso.siso.service.interfaces.IHorarioAtendimentoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class HorarioAtendimentoService implements IHorarioAtendimentoService {

    private final IProfissionalDaSaudeRepository profissionalDaSaudeRepository;

    @Autowired
    public HorarioAtendimentoService(IProfissionalDaSaudeRepository profissionalDaSaudeRepository) {
        this.profissionalDaSaudeRepository = profissionalDaSaudeRepository;
    }

    public ProfissionalDaSaude cadastrarHorarioAtendimento(Integer idProfissional, HorarioAtendimento horarioAtendimento){

        ProfissionalDaSaude profissionalDaSaude = profissionalDaSaudeRepository.findById(idProfissional)
                .orElseThrow(() -> new EntityNotFoundException("Não existe um profissional cadastrado com esse id."));

        boolean conflita = profissionalDaSaude.getHorarios_atendimento().stream().anyMatch(horarioExistente ->
                horarioExistente.getDia_semana() == horarioAtendimento.getDia_semana() &&
                        horariosConflitam(horarioExistente.getHorario_inicio(), horarioExistente.getHorario_fim(),
                                horarioAtendimento.getHorario_inicio(), horarioAtendimento.getHorario_fim())
        );

        if (conflita) {
            throw new RuntimeException("O horário informado conflita com outro já cadastrado para esse dia.");
        }

        if (!horarioAtendimento.getHorario_inicio().isBefore(horarioAtendimento.getHorario_fim())) {
            throw new IllegalArgumentException("O horário de início deve ser anterior ao horário de fim.");
        }

        horarioAtendimento.setProfissional_da_saude(profissionalDaSaude);
        profissionalDaSaude.getHorarios_atendimento().add(horarioAtendimento);
        return profissionalDaSaudeRepository.save(profissionalDaSaude);
    }

    private boolean horariosConflitam(LocalTime inicio1, LocalTime fim1, LocalTime inicio2, LocalTime fim2) {
        return !inicio1.isAfter(fim2) && !inicio2.isAfter(fim1);
    }
}