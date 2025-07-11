package com.siso.siso.dto.update;

import com.siso.siso.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecepcionistaUpdateDTO {
    private Integer id;
    private String nome;
    private Status status;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private String numero_casa;
}