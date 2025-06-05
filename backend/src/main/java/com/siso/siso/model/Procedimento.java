package com.siso.siso.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "procedimentos")
public class Procedimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProcedimento;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private float preco;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private int duracao_em_sessao;

    public Procedimento(Integer id,String nome, float preco, String descricao, int duracao_sessao) {
        this.idProcedimento = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.duracao_em_sessao = duracao_sessao;
    }
}
