package com.siso.siso.model.enums;

import lombok.Getter;

@Getter
public enum Role{
    ADMIN("ADMIN"),
    RECEPCIONISTA("RECEPCIONISTA"),
    PROFISSIONAL_SAUDE("PROFISSIONAL_SAUDE");

    private final String role;

    Role(String role) {
        this.role = role;
    }
}