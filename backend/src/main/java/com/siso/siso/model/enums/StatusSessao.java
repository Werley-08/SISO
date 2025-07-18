package com.siso.siso.model.enums;

public enum StatusSessao {
    REALIZADA("REALIZADA"),
    PENDENTE("PENDENTE"),
    CANCELADA("CANCELADA");

    public final String status;

    StatusSessao(String status){
        this.status = status;
    }
}