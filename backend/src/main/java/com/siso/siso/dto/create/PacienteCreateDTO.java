package com.siso.siso.dto.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PacienteCreateDTO {
    private String nome;
    private LocalDate data_nascimento;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private Integer num_casa;
    private ResponsavelCreateDTO responsavel;
}