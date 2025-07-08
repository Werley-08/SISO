package com.siso.siso.dto.create;

import com.siso.siso.model.Paciente;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnamneseCreateDTO {
    private float peso;
    private float altura;
    private String alergias;
    private boolean medicamentos;
    private boolean doencas_cronicas;
    private Paciente paciente;
}