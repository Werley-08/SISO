package com.siso.siso.model;

import com.siso.siso.model.enums.Role;
import com.siso.siso.model.enums.Status;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@DiscriminatorValue("PROFISSIONAL_DA_SAUDE")
@Entity
public class ProfissionalDaSaude extends Usuario{

    public ProfissionalDaSaude(Integer id,
                               String nome,
                               String username,
                               String senha,
                               Role role,
                               Status status,
                               String telefone,
                               String rua,
                               String bairro,
                               String cidade,
                               String numero_casa,
                               Especialidade especialidade,
                               List<HorarioAtendimento> horarios_atendimento) {
        super(id, nome, username, senha, role, status, telefone, rua, bairro, cidade, numero_casa);
        this.especialidade = especialidade;
        this.horarios_atendimento = horarios_atendimento;
    }

    public ProfissionalDaSaude(Integer id) {
        super(id);
    }

    @OneToOne
    @JoinColumn(name = "especialidade_id")
    private Especialidade especialidade;

    @OneToMany(mappedBy = "profissional_da_saude", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<HorarioAtendimento> horarios_atendimento = new ArrayList<>();
}