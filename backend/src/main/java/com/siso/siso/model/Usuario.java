package com.siso.siso.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Usuario{

    @Id
    @Column(nullable = false)
    private Integer id;
}