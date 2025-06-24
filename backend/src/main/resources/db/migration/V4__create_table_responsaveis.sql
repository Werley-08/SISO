CREATE TABLE responsaveis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    parentesco VARCHAR(255) NOT NULL
);