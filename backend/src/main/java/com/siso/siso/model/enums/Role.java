package com.siso.siso.model.enums;

public enum Role{
    ADMIN("ADMIN"),
    RECEPCIONISTA("RECEPCIONISTA"),
    PROFISSIONAL_SAUDE("PROFISSIONAL DA SAÚDE");

    private final String role;

    Role(String role) {
        this.role = role;
    }

    public String getRole() {
        return this.role;
    }
}