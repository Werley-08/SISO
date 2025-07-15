package com.siso.siso.dto.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SessaoCreateDTO {
    private String data;
    private LocalTime hora;
    private String outras_informacoes;
}