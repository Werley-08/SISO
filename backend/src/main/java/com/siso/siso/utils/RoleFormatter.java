package com.siso.siso.utils;

import com.siso.siso.model.enums.Role;

public interface RoleFormatter {

    public static String formatRole(Role role) {
        if (role == null) return null;

        return switch (role) {
            case ADMIN -> "ADMIN";
            case RECEPCIONISTA -> "RECEPCIONISTA";
            case PROFISSIONAL_DA_SAUDE -> "PROFISSIONAL DA SAÚDE";
        };
    }
}