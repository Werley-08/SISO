package com.siso.siso.model;

import com.siso.siso.model.enums.StatusSessao;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sessoes")
public class Sessao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private LocalDate data;

    @Column(nullable = false)
    private LocalTime hora;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusSessao status;

    @Column(name = "outras_informacoes", columnDefinition = "TEXT")
    private String outras_informacoes;

    @ManyToOne
    @JoinColumn(name = "tratamento_id", nullable = false)
    private Tratamento tratamento;
}