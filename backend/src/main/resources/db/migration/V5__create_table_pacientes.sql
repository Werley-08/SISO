CREATE TABLE Pacientes(
    id_paciente     SERIAL PRIMARY KEY AUTO_INCREMENT,
    nome            VARCHAR(255) NOT NULL,
    data_nascimento VARCHAR(255) NOT NULL,
    telefone        VARCHAR(255) NOT NULL,
    rua             VARCHAR(255),
    bairro          VARCHAR(255),
    cidade          VARCHAR(255),
    num_casa        INT,
    responsavel_id  INT,
    CONSTRAINT fk_responsavel
        FOREIGN KEY (responsavel_id)
            REFERENCES Responsaveis (id_responsavel)
            ON DELETE SET NULL
);