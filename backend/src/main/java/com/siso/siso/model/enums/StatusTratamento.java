package com.siso.siso.model.enums;

public enum StatusTratamento {
    FINALIZADO("FINALIZADO"),
    INTERROMPIDO("INTERROMPIDO"),
    EM_ANDAMENTO("EM_ANDAMENTO");

    public final String status;

    StatusTratamento(String status){
        this.status = status;
    }
}