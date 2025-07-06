package com.siso.siso.dto.response;

import com.siso.siso.model.Paciente;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnamneseResponseDTO {
    private Integer id;
    private float peso;
    private float altura;
    private String alergias;
    private boolean medicamentos;
    private boolean doencasCronica;
    private Paciente idPaciente;
}
