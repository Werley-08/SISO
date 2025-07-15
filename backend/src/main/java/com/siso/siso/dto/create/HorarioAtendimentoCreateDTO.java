package com.siso.siso.dto.create;

import com.siso.siso.model.enums.DiaSemana;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HorarioAtendimentoCreateDTO {

    private DiaSemana dia_semana;
    private LocalTime horario_inicio;
    private LocalTime horario_fim;
}