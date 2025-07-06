package com.siso.siso.mapper;

import com.siso.siso.dto.create.AnamneseCreateDTO;
import com.siso.siso.dto.response.AnamneseResponseDTO;
import com.siso.siso.model.Anamnese;

public interface AnamneseMapper {

    static AnamneseResponseDTO toDTO(Anamnese anamnese) {
        return new AnamneseResponseDTO(
                anamnese.getId(),
                anamnese.getPeso(),
                anamnese.getAltura(),
                anamnese.getAlergias(),
                anamnese.isMedicamentos(),
                anamnese.isDoencasCronica(),
                anamnese.getIdPaciente()
        );
    }

    static Anamnese toModel(AnamneseCreateDTO anamneseDTO) {
        return new Anamnese(
                null,
                anamneseDTO.getPeso(),
                anamneseDTO.getAltura(),
                anamneseDTO.getAlergias(),
                anamneseDTO.isMedicamentos(),
                anamneseDTO.isDoencasCronica(),
                anamneseDTO.getIdPaciente()
        );
    }
}
