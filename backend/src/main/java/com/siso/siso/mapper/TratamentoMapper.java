package com.siso.siso.mapper;

import com.siso.siso.dto.create.TratamentoCreateDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.dto.update.TratamentoUpdateDTO;
import com.siso.siso.model.*;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.StatusTratamento;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
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
                new ProfissionalDaSaude(tratamentoCreateDTO.getProfissional_id(), Role.PROFISSIONAL_DA_SAUDE),
                new Procedimento(tratamentoCreateDTO.getProcedimento_id()),
                new Paciente(tratamentoCreateDTO.getPaciente_id()),
                null
        );
    }

    static TratamentoResponseDTO toDTO(Tratamento tratamento) {

        return new TratamentoResponseDTO(
                tratamento.getId(),
                formatDate(tratamento.getData_inicio()),
                formatDate(tratamento.getData_finalizacao()),
                tratamento.getStatus(),
                tratamento.getOutras_informacoes(),
                ProfissionalDaSaudeMapper.toDTO(tratamento.getProfissional()),
                ProcedimentoMapper.toDTO(tratamento.getProcedimento()),
                PacienteMapper.toDTO(tratamento.getPaciente()),
                tratamento.getSessoes() == null
                        ? null
                        : SessaoMapper.toDTO(tratamento.getSessoes())
        );
    }

    static List<TratamentoResponseDTO> toDTO(List<Tratamento> tratamentos) {
        return tratamentos.stream()
                .map(TratamentoMapper::toDTO)
                .collect(Collectors.toList());
    }

    static Tratamento toModel(TratamentoUpdateDTO tratamentoUpdateDTO) {
        Tratamento tratamento = new Tratamento();
        tratamento.setOutras_informacoes(tratamentoUpdateDTO.getOutras_informacoes());
        return tratamento;
    }
}