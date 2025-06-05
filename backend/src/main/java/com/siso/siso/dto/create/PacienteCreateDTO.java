package com.siso.siso.dto.create;

import com.siso.siso.model.enums.ClassificacaoEtaria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PacienteCreateDTO {
    private ClassificacaoEtaria classificacaoEtaria;
    private String nome;
    private String data_nascimento;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private Integer num_casa;
    private ResponsavelCreateDTO responsavel;
}