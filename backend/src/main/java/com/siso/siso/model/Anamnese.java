package com.siso.siso.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Anamnese {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private float peso;

    @Column(nullable = false)
    private float altura;

    @Column(nullable = false)
    private String alergias;

    @Column(nullable = false)
    private boolean medicamentos;

    @Column(name = "doencas_cronicas", nullable=false)
    private boolean doencas_cronicas;

    @OneToOne
    @JoinColumn(name = "id_paciente")
    private Paciente paciente;
}