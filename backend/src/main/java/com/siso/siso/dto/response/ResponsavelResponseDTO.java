package com.siso.siso.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponsavelResponseDTO {
    private Integer id_responsavel;
    private String nome;
    private String telefone;
    private String parentesco;
}