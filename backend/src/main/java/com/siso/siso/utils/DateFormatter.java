package com.siso.siso.utils;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public interface DateFormatter {

    DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    static LocalDate formatDate(String dataString) {
        try {
            return LocalDate.parse(dataString, FORMATTER);
        } catch (DateTimeParseException e) {
            System.err.println("Data inválida: " + dataString);
            return null;
        }
    }

    static String formatDate(LocalDate data) {
        if (data == null) return null;
        return data.format(FORMATTER);
    }
}