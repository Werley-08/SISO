package com.siso.siso.mapper.create;

import com.siso.siso.dto.EspecialidadeDTO;
import com.siso.siso.model.Especialidade;

public interface EspecialidadeMapper {
    static EspecialidadeDTO toDTO(Especialidade especialidade) {
        return new EspecialidadeDTO(
                especialidade.getNome()
        );
    }

    static Especialidade toModel(EspecialidadeDTO especialidadeDTO) {
        return new Especialidade(
                especialidadeDTO.getNome()
        );
    }
}
