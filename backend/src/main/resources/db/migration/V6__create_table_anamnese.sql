CREATE TABLE anamnese(
    id SERIAL primary key,
    peso REAL not null,
    altura REAL not null,
    alergias VARCHAR not null,
    medicamentos BOOLEAN not null,
    doencas_cronicas BOOLEAN not null,
    id_paciente INTEGER NOT NULL REFERENCES pacientes(id)
);