package com.siso.siso.dto.response;

import com.siso.siso.model.enums.ClassificacaoEtaria;
import com.siso.siso.model.enums.StatusPaciente;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PacienteResponseDTO {
    private Integer id_paciente;
    private ClassificacaoEtaria classificacaoEtaria;
    private StatusPaciente statusPaciente;
    private String nome;
    private String data_nascimento;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private Integer num_casa;
    private ResponsavelResponseDTO responsavel;
}