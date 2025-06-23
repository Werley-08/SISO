package com.siso.siso.mapper;

import com.siso.siso.dto.create.ResponsavelCreateDTO;
import com.siso.siso.dto.response.ResponsavelResponseDTO;
import com.siso.siso.dto.update.ResponsavelUpdateDTO;
import com.siso.siso.model.Responsavel;

public interface ResponsavelMapper {

    static Responsavel toModel(ResponsavelCreateDTO dto) {
        if (dto == null) return null;
        return new Responsavel(
                null,
                dto.getNome(),
                dto.getTelefone(),
                dto.getParentesco()
        );
    }

    static Responsavel toModel(ResponsavelUpdateDTO dto) {
        if (dto == null) return null;
        return new Responsavel(
                dto.getId(),
                dto.getNome(),
                dto.getTelefone(),
                dto.getParentesco()
        );
    }

    static ResponsavelResponseDTO toDTO(Responsavel responsavel) {
        if (responsavel == null) return null;
        return new ResponsavelResponseDTO(
                responsavel.getId(),
                responsavel.getNome(),
                responsavel.getTelefone(),
                responsavel.getParentesco()
        );
    }
}