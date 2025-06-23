package com.siso.siso.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProcedimentoResponseDTO {
    private Integer id;
    private String nome;
    private float preco;
    private String descricao;
    private int duracao_em_sessao;
}