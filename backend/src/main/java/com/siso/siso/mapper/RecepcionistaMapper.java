package com.siso.siso.mapper;

import com.siso.siso.model.Recepcionista;
import com.siso.siso.dto.RecepcionistaDTO;
import com.siso.siso.dto.response.RecepcionistaResponseDTO;

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
                recepcionista.getSenha(),
                recepcionista.getTelefone(),
                recepcionista.getRua(),
                recepcionista.getBairro(),
                recepcionista.getCidade(),
                recepcionista.getNumero_casa()
        );
    }

    static Recepcionista toModel(RecepcionistaDTO recepcionistaDTO){
        return new Recepcionista(
                recepcionistaDTO.getId(),
                recepcionistaDTO.getNome(),
                recepcionistaDTO.getUsername(),
                recepcionistaDTO.getSenha(),
                recepcionistaDTO.getRole(),
                recepcionistaDTO.getStatus(),
                recepcionistaDTO.getTelefone(),
                recepcionistaDTO.getRua(),
                recepcionistaDTO.getBairro(),
                recepcionistaDTO.getCidade(),
                recepcionistaDTO.getNumero_casa()
        );
    }

    static List<RecepcionistaResponseDTO> toDTO(List<Recepcionista> recepcionistas) {
        return recepcionistas.stream()
                .map(recepcionista -> {
                    RecepcionistaResponseDTO recepcionistaResponseDTO = new RecepcionistaResponseDTO();

                    recepcionistaResponseDTO.setNome(recepcionista.getNome());
                    recepcionistaResponseDTO.setUsername(recepcionista.getUsername());
                    recepcionistaResponseDTO.setStatus(recepcionista.getStatus());
                    recepcionistaResponseDTO.setRole(formatRole(recepcionista.getRole()));
                    recepcionistaResponseDTO.setSenha(null);
                    recepcionistaResponseDTO.setTelefone(recepcionista.getTelefone());
                    recepcionistaResponseDTO.setRua(recepcionista.getRua());
                    recepcionistaResponseDTO.setBairro(recepcionista.getBairro());
                    recepcionistaResponseDTO.setCidade(recepcionista.getCidade());
                    recepcionistaResponseDTO.setNumero_casa(recepcionista.getNumero_casa());
                    return recepcionistaResponseDTO;
                })
                .collect(Collectors.toList());
    }
}