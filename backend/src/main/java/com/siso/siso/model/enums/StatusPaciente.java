package com.siso.siso.model.enums;

public enum StatusPaciente {
    AGUARDANDO_INICIO("AGUARDANDO_INICIO"),
    EM_TRATAMENTO("EM_TRATAMENTO"),
    TRATAMENTO_CONCLUIDO("TRATAMENTO_CONCLUIDO"),
    EM_MANUTENÇÃO("EM_MANUTENÇÃO");

    private final String statusPaciente;

    StatusPaciente(String statusPaciente) {
        this.statusPaciente = statusPaciente;
    }
}