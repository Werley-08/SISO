package com.siso.siso.model;

import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@DiscriminatorValue("RECEPCIONISTA")
@Entity
public class Recepcionista extends Usuario {
    public Recepcionista(Integer id, String nome, String username, String senha, Role role, Status status, String telefone, String rua, String bairro, String cidade, String numero_casa) {
        super(id, nome, username, senha, role, status, telefone, rua, bairro, cidade, numero_casa);
    }

}
