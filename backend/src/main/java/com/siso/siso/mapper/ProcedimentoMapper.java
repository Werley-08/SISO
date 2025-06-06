package com.siso.siso.mapper;

import com.siso.siso.dto.create.ProcedimentoCreateDTO;
import com.siso.siso.dto.response.ProcedimentoResponseDTO;
import com.siso.siso.model.Procedimento;

public interface ProcedimentoMapper {
    static Procedimento toModel(ProcedimentoCreateDTO procedimentoCreateDTO) {
        return new Procedimento(
                null,
                procedimentoCreateDTO.getNome(),
                procedimentoCreateDTO.getPreco(),
                procedimentoCreateDTO.getDescricao(),
                procedimentoCreateDTO.getDuracao_em_sessao()
        );
    }

    static ProcedimentoResponseDTO toDTO(Procedimento procedimento){
        return new ProcedimentoResponseDTO(
                procedimento.getIdProcedimento(),
                procedimento.getNome(),
                procedimento.getPreco(),
                procedimento.getDescricao(),
                procedimento.getDuracao_em_sessao()
        );
    }
}
