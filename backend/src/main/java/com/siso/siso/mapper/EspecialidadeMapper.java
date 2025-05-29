package com.siso.siso.mapper;

import com.siso.siso.dto.create.EspecialidadeCreateDTO;
import com.siso.siso.dto.response.EspecialidadeResponseDTO;
import com.siso.siso.dto.update.EspecialidadeUpdateDTO;
import com.siso.siso.model.Especialidade;

import java.util.List;
import java.util.stream.Collectors;

public interface EspecialidadeMapper {

    // Converte models para ResponseDTO
    static EspecialidadeResponseDTO toDTO(Especialidade especialidade) {
        return new EspecialidadeResponseDTO(
                especialidade.getId(),
                especialidade.getNome()
        );
    }

    static List<EspecialidadeResponseDTO> toDTO(List<Especialidade> especialidades) {
        return especialidades.stream().
                map(especialidade -> new EspecialidadeResponseDTO(
                        especialidade.getId(),
                        especialidade.getNome()))
                .collect(Collectors.toList());
    }

    // Converte DTOs para Model
    static Especialidade toModel(EspecialidadeCreateDTO especialidadeDTO) {
        return new Especialidade(
                null,
                especialidadeDTO.getNome()
        );
    }

    static Especialidade toModel(EspecialidadeUpdateDTO especialidadeDTO) {
        return new Especialidade(
                especialidadeDTO.getId(),
                especialidadeDTO.getNome()
        );
    }
}