package com.siso.siso.mapper;

import com.siso.siso.dto.response.AnamneseResponseDTO;
import com.siso.siso.model.Anamnese;

public interface AnamneseMapper {
    static AnamneseResponseDTO toDTO(Anamnese anamnese) {
        return new AnamneseResponseDTO(
                anamnese.getId(),
                anamnese.getPeso(),
                anamnese.getAltura(),
                anamnese.isMedicamentos(),
                anamnese.isDoencasCronica(),
                anamnese.getId_paciente()
        );
    }

    static Anamnese toModel(AnamneseResponseDTO anamneseDTO) {
        return new Anamnese(
                null,
                anamneseDTO.getPeso(),
                anamneseDTO.getAltura(),
                anamneseDTO.isMedicamentos(),
                anamneseDTO.isDoencasCronica(),
                anamneseDTO.getId_paciente()
        );
    }
}
