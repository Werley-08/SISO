CREATE TABLE Responsaveis (
    id_responsavel SERIAL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    parentesco VARCHAR(255) NOT NULL
);
