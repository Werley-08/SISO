package com.siso.siso.mapper;

import com.siso.siso.dto.create.ProfissionalDaSaudeCreateDTO;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.RoleFormatter.formatRole;

public interface ProfissionalDaSaudeMapper {

    // Converte Model para ResponseDTO
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
                profissionalDaSaude.getEspecialidade()
        );
    }

    static List<ProfissionalDaSaudeResponseDTO> toDTO(List<ProfissionalDaSaude> profissionais) {
        return profissionais.stream()
                .map(profissional -> {
                    ProfissionalDaSaudeResponseDTO profissionalDaSaudeResponseDTO = new ProfissionalDaSaudeResponseDTO();

                    profissionalDaSaudeResponseDTO.setId(profissional.getId());
                    profissionalDaSaudeResponseDTO.setNome(profissional.getNome());
                    profissionalDaSaudeResponseDTO.setUsername(profissional.getUsername());
                    profissionalDaSaudeResponseDTO.setStatus(profissional.getStatus());
                    profissionalDaSaudeResponseDTO.setRole(formatRole(profissional.getRole()));
                    profissionalDaSaudeResponseDTO.setTelefone(profissional.getTelefone());
                    profissionalDaSaudeResponseDTO.setRua(profissional.getRua());
                    profissionalDaSaudeResponseDTO.setBairro(profissional.getBairro());
                    profissionalDaSaudeResponseDTO.setCidade(profissional.getCidade());
                    profissionalDaSaudeResponseDTO.setNumero_casa(profissional.getNumero_casa());
                    profissionalDaSaudeResponseDTO.setEspecialidade(profissional.getEspecialidade());
                    return profissionalDaSaudeResponseDTO;
                })
                .collect(Collectors.toList());
    }

    // Converte DTOs em Model
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
                profissionalDaSaudeDTO.getEspecialidade()
        );
    }
}