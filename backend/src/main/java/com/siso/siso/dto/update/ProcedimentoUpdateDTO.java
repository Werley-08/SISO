package com.siso.siso.dto.update;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProcedimentoUpdateDTO {
    private Integer id;
    private String nome;
    private float preco;
    private int duracao_em_sessao;
}