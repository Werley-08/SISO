package com.siso.siso.model;

import com.siso.siso.model.enums.ClassificacaoEtaria;
import com.siso.siso.model.enums.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pacientes")
public class Paciente {

    public Paciente(Integer id){
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ClassificacaoEtaria classificacao_etaria;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

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

    @OneToOne(mappedBy = "paciente")
    private Anamnese anamnese;
}