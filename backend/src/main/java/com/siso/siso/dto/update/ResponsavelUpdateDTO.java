package com.siso.siso.dto.update;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponsavelUpdateDTO {
    private Integer id;
    private String nome;
    private String telefone;
    private String parentesco;
}