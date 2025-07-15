CREATE TABLE procedimentos(
    id SERIAL primary key,
    nome VARCHAR(255) NOT NULL,
    preco REAL NOT NULL,
    duracao_em_sessao INTEGER NOT NULL
);