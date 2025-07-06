CREATE TABLE horarios_atendimento (
    id SERIAL PRIMARY KEY,
    dia_semana VARCHAR(20) NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    profissional_id INTEGER NOT NULL,
    CONSTRAINT fk_profissional
        FOREIGN KEY (profissional_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);