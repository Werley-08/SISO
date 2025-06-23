package com.siso.siso.model.enums;

import lombok.Getter;

@Getter
public enum ClassificacaoEtaria {
    ADULTO("ADULTO"),
    MENOR("MENOR");

    private final String classificacaoEtaria;

    ClassificacaoEtaria(String classificacaoEtaria) {
        this.classificacaoEtaria = classificacaoEtaria;
    }
}