package com.siso.siso.mapper;

import com.siso.siso.dto.ProfissionalDaSaudeDTO;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

public interface ProfissionalDaSaudeMapper {

    static ProfissionalDaSaudeDTO toDTO(ProfissionalDaSaude profissionalDaSaude) {
        return new ProfissionalDaSaudeDTO(
                profissionalDaSaude.getNome(),
                profissionalDaSaude.getUsername(),
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