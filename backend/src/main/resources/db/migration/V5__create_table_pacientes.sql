CREATE TABLE pacientes(
    id_paciente     SERIAL PRIMARY KEY,
    nome            VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone        VARCHAR(255) NOT NULL,
    rua             VARCHAR(255),
    bairro          VARCHAR(255),
    cidade          VARCHAR(255),
    num_casa        INT,
    id_responsavel  INT,
    CONSTRAINT fk_responsavel FOREIGN KEY (id_responsavel) REFERENCES Responsaveis (id_responsavel)
);