package com.siso.siso.mapper;

import com.siso.siso.dto.create.HorarioAtendimentoCreateDTO;
import com.siso.siso.dto.response.HorarioAtendimentoResponseDTO;
import com.siso.siso.model.HorarioAtendimento;

import java.util.List;
import java.util.stream.Collectors;

public interface HorarioAtendimentoMapper {

    static HorarioAtendimentoResponseDTO toDTO(HorarioAtendimento horarioAtendimentoDTO) {
        return new HorarioAtendimentoResponseDTO(
                horarioAtendimentoDTO.getId(),
                horarioAtendimentoDTO.getDia_semana(),
                horarioAtendimentoDTO.getHorario_inicio(),
                horarioAtendimentoDTO.getHorario_fim()
        );
    }

    static List<HorarioAtendimentoResponseDTO> toDTO(List<HorarioAtendimento> horariosAtendimentos) {
        return horariosAtendimentos.stream()
                .map(HorarioAtendimentoMapper::toDTO)
                .collect(Collectors.toList());
    }

    static HorarioAtendimento toModel(HorarioAtendimentoCreateDTO horarioAtendimentoDTO) {
        return new HorarioAtendimento(
                null,
                horarioAtendimentoDTO.getDia_semana(),
                horarioAtendimentoDTO.getHorario_inicio(),
                horarioAtendimentoDTO.getHorario_fim(),
                null
        );
    }
}