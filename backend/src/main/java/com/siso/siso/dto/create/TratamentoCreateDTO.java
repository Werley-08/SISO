package com.siso.siso.dto.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TratamentoCreateDTO {
    public String data_inicio;
    public String outras_informacoes;
    public Integer profissional_id;
    public Integer procedimento_id;
    public Integer paciente_id;
}