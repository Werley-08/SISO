CREATE TABLE sessoes(
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    status VARCHAR(20) NOT NULL,
    outras_informacoes TEXT,
    tratamento_id INTEGER NOT NULL,

    CONSTRAINT fk_sessao_tratamento FOREIGN KEY (tratamento_id)
        REFERENCES tratamentos(id)
        ON DELETE CASCADE
);