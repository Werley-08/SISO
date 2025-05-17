package com.siso.siso.mapper.create;

import com.siso.siso.dto.EspecialidadeDTO;
import com.siso.siso.model.Especialidade;

public class EspecialidadeMapper {
    public static EspecialidadeDTO toDTO(Especialidade especialidade) {
        return new EspecialidadeDTO(
                especialidade.getNome()
        );
    }

    public static Especialidade toModel(EspecialidadeDTO especialidadeDTO) {
        return new Especialidade(
                especialidadeDTO.getNome()
        );
    }
}
