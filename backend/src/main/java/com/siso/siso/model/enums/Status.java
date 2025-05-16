package com.siso.siso.model.enums;

public enum Status{
    ATIVO("ATIVO"),
    INATIVO("INATIVO");

    public final String status;

    Status(String status){
        this.status = status;
    }
}