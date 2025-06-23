package com.siso.siso.mapper;

import com.siso.siso.dto.create.PacienteCreateDTO;
import com.siso.siso.dto.response.PacienteResponseDTO;
import com.siso.siso.dto.update.PacienteUpdateDTO;
import com.siso.siso.model.Paciente;
import com.siso.siso.model.enums.Status;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.DateFormatter.formatDate;

public interface PacienteMapper {

    static Paciente toModel(PacienteCreateDTO pacienteCreateDTO) {

        return new Paciente(
                null,
                pacienteCreateDTO.getClassificacaoEtaria(),
                Status.INATIVO,
                pacienteCreateDTO.getNome(),
                formatDate(pacienteCreateDTO.getData_nascimento()),
                pacienteCreateDTO.getTelefone(),
                pacienteCreateDTO.getRua(),
                pacienteCreateDTO.getBairro(),
                pacienteCreateDTO.getCidade(),
                pacienteCreateDTO.getNum_casa(),
                ResponsavelMapper.toModel(pacienteCreateDTO.getResponsavel())
        );
    }

    static Paciente toModel(PacienteUpdateDTO pacienteUpdateDTO) {

        return new Paciente(
                pacienteUpdateDTO.getId(),
                pacienteUpdateDTO.getClassificacao_etaria(),
                Status.INATIVO,
                pacienteUpdateDTO.getNome(),
                formatDate(pacienteUpdateDTO.getData_nascimento()),
                pacienteUpdateDTO.getTelefone(),
                pacienteUpdateDTO.getRua(),
                pacienteUpdateDTO.getBairro(),
                pacienteUpdateDTO.getCidade(),
                pacienteUpdateDTO.getNum_casa(),
                ResponsavelMapper.toModel(pacienteUpdateDTO.getResponsavel())
        );
    }

    static PacienteResponseDTO toDTO(Paciente paciente) {
        return new PacienteResponseDTO(
                paciente.getId(),
                paciente.getClassificacao_etaria(),
                paciente.getStatus(),
                paciente.getNome(),
                formatDate(paciente.getData_nascimento()),
                paciente.getTelefone(),
                paciente.getRua(),
                paciente.getBairro(),
                paciente.getCidade(),
                paciente.getNum_casa(),
                ResponsavelMapper.toDTO(paciente.getResponsavel())
        );
    }

    static List<PacienteResponseDTO> toDTO(List<Paciente> pacientes) {
        return pacientes.stream()
                .map(PacienteMapper::toDTO)
                .collect(Collectors.toList());
    }
}