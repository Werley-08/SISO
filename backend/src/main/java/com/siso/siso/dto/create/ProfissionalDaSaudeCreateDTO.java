package com.siso.siso.dto.create;

import com.siso.siso.model.Especialidade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfissionalDaSaudeCreateDTO {
    private String nome;
    private String username;
    private String senha;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private String numero_casa;
    private Especialidade especialidade;
}