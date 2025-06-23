package com.siso.siso.mapper;

import com.siso.siso.dto.create.ProcedimentoCreateDTO;
import com.siso.siso.dto.response.EspecialidadeResponseDTO;
import com.siso.siso.dto.response.ProcedimentoResponseDTO;
import com.siso.siso.model.Especialidade;
import com.siso.siso.model.Procedimento;

import java.util.List;
import java.util.stream.Collectors;

public interface ProcedimentoMapper {
    static Procedimento toModel(ProcedimentoCreateDTO procedimentoCreateDTO) {
        return new Procedimento(
                null,
                procedimentoCreateDTO.getNome(),
                procedimentoCreateDTO.getPreco(),
                procedimentoCreateDTO.getDuracao_em_sessao()
        );
    }

    static ProcedimentoResponseDTO toDTO(Procedimento procedimento){
        return new ProcedimentoResponseDTO(
                procedimento.getId(),
                procedimento.getNome(),
                procedimento.getPreco(),
                procedimento.getDuracao_em_sessao()
        );
    }

    static List<ProcedimentoResponseDTO> toDTO(List<Procedimento> procedimentos) {
        return procedimentos.stream()
                .map(ProcedimentoMapper::toDTO)
                .collect(Collectors.toList());
    }
}