package com.siso.siso.mapper;

import com.siso.siso.dto.EspecialidadeDTO;
import com.siso.siso.model.Especialidade;

import java.util.List;
import java.util.stream.Collectors;

public interface EspecialidadeMapper {
    static EspecialidadeDTO toDTO(Especialidade especialidade) {
        return new EspecialidadeDTO(
                especialidade.getId(),
                especialidade.getNome()
        );
    }

    static Especialidade toModel(EspecialidadeDTO especialidadeDTO) {
        return new Especialidade(
                especialidadeDTO.getId(),
                especialidadeDTO.getNome()
        );
    }

    static List<EspecialidadeDTO> toDTO(List<Especialidade> especialidades) {
        return especialidades.stream().
                map(especialidade -> new EspecialidadeDTO(
                        especialidade.getId(),
                        especialidade.getNome()))
                .collect(Collectors.toList());
    }
}
