CREATE TABLE PROCEDIMENTOS(
    id_procedimento SERIAL primary key,
    nome VARCHAR(255) NOT NULL,
    preco REAL NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    duracao_em_sessao INTEGER NOT NULL
);