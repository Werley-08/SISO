package com.siso.siso.mapper;

import com.siso.siso.dto.create.RecepcionistaCreateDTO;
import com.siso.siso.dto.response.RecepcionistaResponseDTO;
import com.siso.siso.dto.update.RecepcionistaUpdateDTO;
import com.siso.siso.model.Recepcionista;
import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;

import java.util.List;
import java.util.stream.Collectors;

import static com.siso.siso.utils.RoleFormatter.formatRole;

public interface RecepcionistaMapper {

    static RecepcionistaResponseDTO toDTO(Recepcionista recepcionista){
        return new RecepcionistaResponseDTO(
                recepcionista.getId(),
                recepcionista.getNome(),
                recepcionista.getUsername(),
                recepcionista.getStatus(),
                formatRole(recepcionista.getRole()),
                recepcionista.getTelefone(),
                recepcionista.getRua(),
                recepcionista.getBairro(),
                recepcionista.getCidade(),
                recepcionista.getNumero_casa()
        );
    }

    static List<RecepcionistaResponseDTO> toDTO(List<Recepcionista> recepcionistas) {
        return recepcionistas.stream()
                .map(RecepcionistaMapper::toDTO)
                .collect(Collectors.toList());
    }

    static Recepcionista toModel(RecepcionistaCreateDTO recepcionistaDTO){
        return new Recepcionista(
                null,
                recepcionistaDTO.getNome(),
                recepcionistaDTO.getUsername(),
                recepcionistaDTO.getSenha(),
                Role.RECEPCIONISTA,
                Status.ATIVO,
                recepcionistaDTO.getTelefone(),
                recepcionistaDTO.getRua(),
                recepcionistaDTO.getBairro(),
                recepcionistaDTO.getCidade(),
                recepcionistaDTO.getNumero_casa()
        );
    }

    static Recepcionista toModel(RecepcionistaUpdateDTO recepcionistaDTO){
        return new Recepcionista(
                recepcionistaDTO.getId(),
                recepcionistaDTO.getNome(),
                null,
                null,
                Role.RECEPCIONISTA,
                recepcionistaDTO.getStatus(),
                recepcionistaDTO.getTelefone(),
                recepcionistaDTO.getRua(),
                recepcionistaDTO.getBairro(),
                recepcionistaDTO.getCidade(),
                recepcionistaDTO.getNumero_casa()
        );
    }
}