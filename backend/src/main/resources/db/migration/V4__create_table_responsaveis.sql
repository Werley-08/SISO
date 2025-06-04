CREATE TABLE responsaveis (
    id_responsavel SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    parentesco VARCHAR(255) NOT NULL
);