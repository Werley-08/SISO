package com.siso.siso.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Pacientes")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPaciente;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String data_nascimento;

    @Column(nullable = false)
    private String telefone;

    @Column()
    private String rua;

    @Column()
    private String bairro;

    @Column()
    private String cidade;

    @Column()
    private int num_casa;

    @OneToOne(cascade = CascadeType.ALL)
    private Responsavel responsavel;
}
