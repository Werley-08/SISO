package com.siso.siso.model;

import com.siso.siso.model.enums.DiaSemana;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "horarios_atendimento")
public class HorarioAtendimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DiaSemana dia_semana;

    @Column(nullable = false)
    private LocalTime horario_inicio;

    @Column(nullable = false)
    private LocalTime horario_fim;

    @ManyToOne
    @JoinColumn(name = "profissional_id", nullable = false)
    private ProfissionalDaSaude profissional_da_saude;
}