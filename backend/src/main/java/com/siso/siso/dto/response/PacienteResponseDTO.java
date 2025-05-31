package com.siso.siso.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PacienteResponseDTO {
    private Integer idPaciente;
    private String nome;
    private String data_nascimento;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private int num_casa;
    private ResponsavelResponseDTO responsavel;
}
