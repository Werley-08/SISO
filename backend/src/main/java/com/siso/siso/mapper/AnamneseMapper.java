package com.siso.siso.mapper;

import com.siso.siso.dto.create.AnamneseCreateDTO;
import com.siso.siso.dto.response.AnamneseResponseDTO;
import com.siso.siso.dto.update.AnamneseUpdateDTO;
import com.siso.siso.model.Anamnese;

public interface AnamneseMapper {

    static AnamneseResponseDTO toDTO(Anamnese anamnese) {
        if (anamnese == null)
            return null;

        return new AnamneseResponseDTO(
                anamnese.getId(),
                anamnese.getPeso(),
                anamnese.getAltura(),
                anamnese.getAlergias(),
                anamnese.isMedicamentos(),
                anamnese.isDoencas_cronicas(),
                anamnese.getPaciente().getId()
        );
    }

    static Anamnese toModel(AnamneseCreateDTO anamneseDTO) {
        return new Anamnese(
                null,
                anamneseDTO.getPeso(),
                anamneseDTO.getAltura(),
                anamneseDTO.getAlergias(),
                anamneseDTO.isMedicamentos(),
                anamneseDTO.isDoencas_cronicas(),
                anamneseDTO.getPaciente()
        );
    }

    static Anamnese toModel(AnamneseUpdateDTO anamneseDTO) {
        return new Anamnese(
                anamneseDTO.getId(),
                anamneseDTO.getPeso(),
                anamneseDTO.getAltura(),
                anamneseDTO.getAlergias(),
                anamneseDTO.isMedicamentos(),
                anamneseDTO.isDoencas_cronicas(),
                anamneseDTO.getPaciente()
        );
    }
}