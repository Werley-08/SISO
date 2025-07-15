package com.siso.siso.model;

import com.siso.siso.model.enums.StatusTratamento;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tratamentos")
public class Tratamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "data_inicio", nullable = false)
    private LocalDate data_inicio;

    @Column(name = "data_finalizacao")
    private LocalDate data_finalizacao;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusTratamento status;

    @Column(name = "outras_informacoes", columnDefinition = "TEXT")
    private String outras_informacoes;

    @ManyToOne
    @JoinColumn(name = "profissional_id", nullable = false)
    private ProfissionalDaSaude profissional;

    @ManyToOne
    @JoinColumn(name = "procedimento_id", nullable = false)
    private Procedimento procedimento;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

    @OneToMany(mappedBy = "tratamento", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Sessao> sessoes = new ArrayList<>();
}