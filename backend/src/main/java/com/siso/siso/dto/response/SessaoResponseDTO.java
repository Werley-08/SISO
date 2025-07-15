package com.siso.siso.dto.response;

import com.siso.siso.model.enums.StatusSessao;
import lombok.*;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SessaoResponseDTO {
    private Integer id;
    private String data;
    private LocalTime hora;
    private StatusSessao status;
    private String outras_informacoes;
    private TratamentoResponseDTO tratamento;
}