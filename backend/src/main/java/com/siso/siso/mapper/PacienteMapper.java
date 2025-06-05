package com.siso.siso.mapper;

import com.siso.siso.dto.create.PacienteCreateDTO;
import com.siso.siso.dto.response.PacienteResponseDTO;
import com.siso.siso.dto.response.ResponsavelResponseDTO;
import com.siso.siso.model.Paciente;
import com.siso.siso.model.Responsavel;

public interface PacienteMapper {

    static Paciente toModel(PacienteCreateDTO pacienteCreateDTO) {

        Responsavel responsavel = null;
        if (pacienteCreateDTO.getResponsavel() != null) {
            responsavel = new Responsavel(
                    null,
                    pacienteCreateDTO.getResponsavel().getNome(),
                    pacienteCreateDTO.getResponsavel().getTelefone(),
                    pacienteCreateDTO.getResponsavel().getParentesco()
            );
        }

        return new Paciente(
                null,
                pacienteCreateDTO.getClassificacaoEtaria(),
                pacienteCreateDTO.getNome(),
                pacienteCreateDTO.getData_nascimento(),
                pacienteCreateDTO.getTelefone(),
                pacienteCreateDTO.getRua(),
                pacienteCreateDTO.getBairro(),
                pacienteCreateDTO.getCidade(),
                pacienteCreateDTO.getNum_casa(),
                responsavel
        );
    }

    static PacienteResponseDTO toDTO(Paciente paciente) {

        ResponsavelResponseDTO responsavelDTO = null;
        if (paciente.getResponsavel() != null) {
            responsavelDTO = new ResponsavelResponseDTO(
                    paciente.getResponsavel().getId_responsavel(),
                    paciente.getResponsavel().getNome(),
                    paciente.getResponsavel().getTelefone(),
                    paciente.getResponsavel().getParentesco()
            );
        }

        return new PacienteResponseDTO(
                paciente.getId_paciente(),
                paciente.getClassificacaoEtaria(),
                paciente.getNome(),
                paciente.getData_nascimento(),
                paciente.getTelefone(),
                paciente.getRua(),
                paciente.getBairro(),
                paciente.getCidade(),
                paciente.getNum_casa(),
                responsavelDTO
        );
    }
}