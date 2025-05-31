package com.siso.siso.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponsavelRespondeDTO {
    private Integer idResponsavel;
    private String nome;
    private String telefone;
    private String parentesco;
}
