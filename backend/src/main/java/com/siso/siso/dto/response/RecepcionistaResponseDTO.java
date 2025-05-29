package com.siso.siso.dto.response;

import com.siso.siso.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RecepcionistaResponseDTO {
    private Integer id;
    private String nome;
    private String username;
    private Status status;
    private String role;
    private String senha;
    private String telefone;
    private String rua;
    private String bairro;
    private String cidade;
    private String numero_casa;
}