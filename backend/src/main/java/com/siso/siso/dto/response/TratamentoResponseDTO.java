package com.siso.siso.dto.response;

import com.siso.siso.model.enums.StatusTratamento;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TratamentoResponseDTO {
    private Integer id;
    private String data_inicio;
    private String data_finalizacao;
    private StatusTratamento status;
    private String outras_informacoes;
    private ProfissionalDaSaudeResponseDTO profissional;
    private ProcedimentoResponseDTO procedimento;
    private PacienteResponseDTO paciente;
    private List<SessaoResponseDTO> sessoes;
}