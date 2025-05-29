package com.siso.siso.mapper;

import com.siso.siso.dto.update.ProfissionalDaSaudeUpdateDTO;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.dto.ProfissionalDaSaudeDTO;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;

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
                profissionalDaSaude.getSenha(),
                profissionalDaSaude.getTelefone(),
                profissionalDaSaude.getRua(),
                profissionalDaSaude.getBairro(),
                profissionalDaSaude.getCidade(),
                profissionalDaSaude.getNumero_casa(),
                profissionalDaSaude.getEspecialidade()
        );
    }

    static ProfissionalDaSaude toModel(ProfissionalDaSaudeDTO profissionalDaSaudeDTO) {

        return new ProfissionalDaSaude(
                profissionalDaSaudeDTO.getId(),
                profissionalDaSaudeDTO.getNome(),
                profissionalDaSaudeDTO.getUsername(),
                profissionalDaSaudeDTO.getSenha(),
                profissionalDaSaudeDTO.getRole(),
                profissionalDaSaudeDTO.getStatus(),
                profissionalDaSaudeDTO.getTelefone(),
                profissionalDaSaudeDTO.getRua(),
                profissionalDaSaudeDTO.getBairro(),
                profissionalDaSaudeDTO.getCidade(),
                profissionalDaSaudeDTO.getNumero_casa(),
                profissionalDaSaudeDTO.getEspecialidade()
        );
    }

    static ProfissionalDaSaude toModel(ProfissionalDaSaudeUpdateDTO profissionalDaSaudeUpdateDTO) {

        return new ProfissionalDaSaude(
                profissionalDaSaudeUpdateDTO.getId(),
                profissionalDaSaudeUpdateDTO.getNome(),
                null,
                null,
                null,
                profissionalDaSaudeUpdateDTO.getStatus(),
                profissionalDaSaudeUpdateDTO.getTelefone(),
                profissionalDaSaudeUpdateDTO.getRua(),
                profissionalDaSaudeUpdateDTO.getBairro(),
                profissionalDaSaudeUpdateDTO.getCidade(),
                profissionalDaSaudeUpdateDTO.getNumero_casa(),
                profissionalDaSaudeUpdateDTO.getEspecialidade()
        );
    }

    public static List<ProfissionalDaSaudeResponseDTO> toDTO(List<ProfissionalDaSaude> profissionais) {
        return profissionais.stream()
                .map(profissional -> {
                    ProfissionalDaSaudeResponseDTO profissionalDaSaudeResponseDTO = new ProfissionalDaSaudeResponseDTO();

                    profissionalDaSaudeResponseDTO.setNome(profissional.getNome());
                    profissionalDaSaudeResponseDTO.setUsername(profissional.getUsername());
                    profissionalDaSaudeResponseDTO.setStatus(profissional.getStatus());
                    profissionalDaSaudeResponseDTO.setRole(formatRole(profissional.getRole()));
                    profissionalDaSaudeResponseDTO.setSenha(null);
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
}