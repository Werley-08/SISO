package com.siso.siso.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pacientes")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_paciente;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private LocalDate data_nascimento;

    @Column(nullable = false)
    private String telefone;

    @Column()
    private String rua;

    @Column()
    private String bairro;

    @Column()
    private String cidade;

    @Column()
    private Integer num_casa;

    @OneToOne()
    @JoinColumn(name = "id_responsavel")
    private Responsavel responsavel;
}