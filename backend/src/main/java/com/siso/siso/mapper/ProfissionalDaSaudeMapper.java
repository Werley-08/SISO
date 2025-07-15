package com.siso.siso.mapper;

import com.siso.siso.dto.create.ProfissionalDaSaudeCreateDTO;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;
import com.siso.siso.dto.update.ProfissionalDaSaudeUpdateDTO;
import com.siso.siso.model.HorarioAtendimento;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.RoleFormatter.formatRole;

public interface ProfissionalDaSaudeMapper {

    static ProfissionalDaSaudeResponseDTO toDTO(ProfissionalDaSaude profissionalDaSaude) {
        return new ProfissionalDaSaudeResponseDTO(
                profissionalDaSaude.getId(),
                profissionalDaSaude.getNome(),
                profissionalDaSaude.getUsername(),
                profissionalDaSaude.getStatus(),
                formatRole(profissionalDaSaude.getRole()),
                profissionalDaSaude.getTelefone(),
                profissionalDaSaude.getRua(),
                profissionalDaSaude.getBairro(),
                profissionalDaSaude.getCidade(),
                profissionalDaSaude.getNumero_casa(),
                profissionalDaSaude.getEspecialidade(),
                profissionalDaSaude.getHorarios_atendimento() == null
                        ? null
                        : HorarioAtendimentoMapper.toDTO(profissionalDaSaude.getHorarios_atendimento())
        );
    }

    static List<ProfissionalDaSaudeResponseDTO> toDTO(List<ProfissionalDaSaude> profissionais) {
        return profissionais.stream()
                .map(ProfissionalDaSaudeMapper::toDTO)
                .collect(Collectors.toList());
    }

    static ProfissionalDaSaude toModel(ProfissionalDaSaudeCreateDTO profissionalDaSaudeDTO) {

        return new ProfissionalDaSaude(
                null,
                profissionalDaSaudeDTO.getNome(),
                profissionalDaSaudeDTO.getUsername(),
                profissionalDaSaudeDTO.getSenha(),
                Role.PROFISSIONAL_DA_SAUDE,
                Status.ATIVO,
                profissionalDaSaudeDTO.getTelefone(),
                profissionalDaSaudeDTO.getRua(),
                profissionalDaSaudeDTO.getBairro(),
                profissionalDaSaudeDTO.getCidade(),
                profissionalDaSaudeDTO.getNumero_casa(),
                profissionalDaSaudeDTO.getEspecialidade(),
                null
        );
    }

    static ProfissionalDaSaude toModel(ProfissionalDaSaudeUpdateDTO profissionalDaSaudeDTO) {

        return new ProfissionalDaSaude(
                profissionalDaSaudeDTO.getId(),
                profissionalDaSaudeDTO.getNome(),
                null,
                null,
                Role.PROFISSIONAL_DA_SAUDE,
                profissionalDaSaudeDTO.getStatus(),
                profissionalDaSaudeDTO.getTelefone(),
                profissionalDaSaudeDTO.getRua(),
                profissionalDaSaudeDTO.getBairro(),
                profissionalDaSaudeDTO.getCidade(),
                profissionalDaSaudeDTO.getNumero_casa(),
                profissionalDaSaudeDTO.getEspecialidade(),
                null
        );
    }
}