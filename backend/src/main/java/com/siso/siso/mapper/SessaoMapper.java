package com.siso.siso.mapper;

import com.siso.siso.dto.create.SessaoCreateDTO;
import com.siso.siso.dto.response.SessaoResponseDTO;
import com.siso.siso.dto.update.SessaoUpdateDTO;
import com.siso.siso.dto.update.TratamentoUpdateDTO;
import com.siso.siso.model.Sessao;
import com.siso.siso.model.Tratamento;
import com.siso.siso.model.enums.StatusSessao;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.DateFormatter.formatDate;

public interface SessaoMapper{

    static Sessao toModel(SessaoCreateDTO sessaoCreateDTO) {
        return new Sessao(
                null,
                formatDate(sessaoCreateDTO.getData()),
                sessaoCreateDTO.getHora_inicio(),
                sessaoCreateDTO.getHora_finalizacao(),
                StatusSessao.PENDENTE,
                sessaoCreateDTO.getOutras_informacoes(),
                null
        );
    }

    static SessaoResponseDTO toDTO(Sessao sessao) {
        return new SessaoResponseDTO(
                sessao.getId(),
                formatDate(sessao.getData()),
                sessao.getHora_inicio(),
                sessao.getHora_finalizacao(),
                sessao.getStatus(),
                sessao.getOutras_informacoes(),
                sessao.getTratamento().getId()
        );
    }

    static List<SessaoResponseDTO> toDTO(List<Sessao> sessoes) {
        return sessoes.stream()
                .map(SessaoMapper::toDTO)
                .collect(Collectors.toList());
    }

    static Sessao toModel(SessaoUpdateDTO sessaoUpdateDTO) {
        Sessao sessao = new Sessao();
        sessao.setOutras_informacoes(sessaoUpdateDTO.getOutras_informacoes());
        return sessao;
    }
}