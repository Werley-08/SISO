package com.siso.siso.model;

import com.siso.siso.model.enums.ClassificacaoEtaria;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "pacientes")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_paciente;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ClassificacaoEtaria classificacaoEtaria;

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

    public Paciente(Integer id_paciente, ClassificacaoEtaria classificacaoEtaria, String nome,
                    LocalDate data_nascimento, String telefone, String rua, String bairro, String cidade,
                    Integer num_casa, Responsavel responsavel) {
        this.id_paciente = id_paciente;
        this.classificacaoEtaria = classificacaoEtaria;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.num_casa = num_casa;
        this.responsavel = responsavel;
    }
}