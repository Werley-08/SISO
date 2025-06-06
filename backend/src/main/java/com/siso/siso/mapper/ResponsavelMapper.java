package com.siso.siso.mapper;

import com.siso.siso.dto.create.ResponsavelCreateDTO;
import com.siso.siso.dto.response.ResponsavelResponseDTO;
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

    static ResponsavelResponseDTO toDTO(Responsavel responsavel) {
        if (responsavel == null) return null;
        return new ResponsavelResponseDTO(
                responsavel.getId_responsavel(),
                responsavel.getNome(),
                responsavel.getTelefone(),
                responsavel.getParentesco()
        );
    }
}