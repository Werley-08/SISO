package com.siso.siso.dto.create;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProcedimentoCreateDTO {
    private String nome;
    private float preco;
    private int duracao_em_sessao;
}