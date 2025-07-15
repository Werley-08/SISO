CREATE TABLE tratamentos(
    id SERIAL PRIMARY KEY,
    data_inicio DATE NOT NULL,
    data_finalizacao DATE,
    status VARCHAR(20) NOT NULL,
    outras_informacoes TEXT,
    profissional_id INT NOT NULL,
    procedimento_id INT NOT NULL,
    paciente_id INT NOT NULL,

    CONSTRAINT fk_tratamento_profissional FOREIGN KEY (profissional_id) REFERENCES usuarios(id),
    CONSTRAINT fk_tratamento_procedimento FOREIGN KEY (procedimento_id) REFERENCES procedimentos(id),
    CONSTRAINT fk_tratamento_paciente FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
);