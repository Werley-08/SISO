package com.siso.siso.dto.response;

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
public class HorarioAtendimentoResponseDTO {

    private Integer id;
    private String dia_semana;
    private LocalTime horario_inicio;
    private LocalTime horario_fim;
}