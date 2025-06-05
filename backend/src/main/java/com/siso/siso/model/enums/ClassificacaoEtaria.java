package com.siso.siso.model.enums;

import lombok.Getter;

@Getter
public enum ClassificacaoEtaria {
    MAIOR_IDADE("MAIOR_IDADE"),
    MENOR_IDADE("MENOR_IDADE");

    private final String classificacaoEtaria;

    ClassificacaoEtaria(String classificacaoEtaria) {
        this.classificacaoEtaria = classificacaoEtaria;
    }
}
