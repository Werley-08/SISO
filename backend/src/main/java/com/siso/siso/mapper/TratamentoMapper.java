package com.siso.siso.mapper;

import com.siso.siso.dto.create.TratamentoCreateDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.model.Paciente;
import com.siso.siso.model.Procedimento;
import com.siso.siso.model.ProfissionalDaSaude;
import com.siso.siso.model.Tratamento;
import com.siso.siso.model.enums.StatusTratamento;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.DateFormatter.formatDate;

public interface TratamentoMapper {

    static Tratamento toModel(TratamentoCreateDTO tratamentoCreateDTO) {

        return new Tratamento(
                null,
                formatDate(tratamentoCreateDTO.getData_inicio()),
                null,
                StatusTratamento.EM_ANDAMENTO,
                tratamentoCreateDTO.getOutras_informacoes(),
                new ProfissionalDaSaude(tratamentoCreateDTO.getProfissional_id()),
                new Procedimento(tratamentoCreateDTO.getProcedimento_id()),
                new Paciente(tratamentoCreateDTO.getPaciente_id())
        );
    }

    static TratamentoResponseDTO toDTO(Tratamento tratamento) {

        return new TratamentoResponseDTO(
                tratamento.getId(),
                formatDate(tratamento.getData_inicio()),
                formatDate(tratamento.getData_finalizacao()),
                tratamento.getStatus(),
                tratamento.getOutras_informacoes(),
                tratamento.getProfissional(),
                tratamento.getProcedimento(),
                tratamento.getPaciente()
        );
    }

    static List<TratamentoResponseDTO> toDTO(List<Tratamento> tratamentos) {
        return tratamentos.stream()
                .map(TratamentoMapper::toDTO)
                .collect(Collectors.toList());
    }
}