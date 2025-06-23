INSERT INTO especialidades (nome) VALUES ('Ortodontia');
INSERT INTO especialidades (nome) VALUES ('Endodontia');
INSERT INTO especialidades (nome) VALUES ('Periodontia');
INSERT INTO especialidades (nome) VALUES ('Implantodontia');
INSERT INTO especialidades (nome) VALUES ('Odontopediatria');
INSERT INTO especialidades (nome) VALUES ('Cirurgia Bucomaxilofacial');
INSERT INTO especialidades (nome) VALUES ('Dentística');
INSERT INTO especialidades (nome) VALUES ('Prótese Dentária');
INSERT INTO especialidades (nome) VALUES ('Radiologia Odontológica');
INSERT INTO especialidades (nome) VALUES ('Odontogeriatria');

INSERT INTO usuarios (nome, username, senha, role, status, telefone, rua, bairro, cidade, numero_casa, especialidade_id) VALUES
('Dra. Ana Carolina Souza', 'ana.souza', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 99999-1111', 'Rua das Flores', 'Centro', 'Fortaleza', '123', 1),
('Dr. Bruno Henrique Lima', 'bruno.lima', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 98888-2222', 'Av. Beira Mar', 'Meireles', 'Fortaleza', '456', 2),
('Dra. Camila Rocha', 'camila.rocha', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 97777-3333', 'Rua das Palmeiras', 'Aldeota', 'Fortaleza', '789', 3),
('Dr. Diego Martins', 'diego.martins', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 96666-4444', 'Rua José de Alencar', 'Parquelândia', 'Fortaleza', '101', 4),
('Dra. Elisa Teixeira', 'elisa.teixeira', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 95555-5555', 'Rua Pedro I', 'Montese', 'Fortaleza', '202', 5),
('Dr. Fábio Albuquerque', 'fabio.albuquerque', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 94444-6666', 'Av. Dom Luís', 'Aldeota', 'Fortaleza', '303', 6),
('Dra. Gabriela Monteiro', 'gabriela.monteiro', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 93333-7777', 'Rua das Laranjeiras', 'Cocó', 'Fortaleza', '404', 7),
('Dr. Henrique Castro', 'henrique.castro', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 92222-8888', 'Rua Silva Paulet', 'Benfica', 'Fortaleza', '505', 8),
('Dra. Isabela Fontes', 'isabela.fontes', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 91111-9999', 'Av. Santos Dumont', 'Papicu', 'Fortaleza', '606', 9),
('Dr. João Paulo Ribeiro', 'joao.ribeiro', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 90000-0000', 'Rua Nogueira Acioli', 'Joaquim Távora', 'Fortaleza', '707', 10),
('Dra. Karla Menezes', 'karla.menezes', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 98888-1212', 'Rua das Mangueiras', 'Centro', 'Fortaleza', '808', 1),
('Dr. Leonardo Silva', 'leonardo.silva', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 97777-3434', 'Rua dos Coqueiros', 'Meireles', 'Fortaleza', '909', 2),
('Dra. Mariana Gomes', 'mariana.gomes', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 96666-5656', 'Rua João Cordeiro', 'Aldeota', 'Fortaleza', '111', 3),
('Dr. Nathan Oliveira', 'nathan.oliveira', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 95555-7878', 'Rua Dona Leopoldina', 'Parquelândia', 'Fortaleza', '222', 4),
('Dra. Olivia Barros', 'olivia.barros', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 94444-9898', 'Rua Tenente Benévolo', 'Montese', 'Fortaleza', '333', 5),
('Dr. Pedro Fernandes', 'pedro.fernandes', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 93333-2323', 'Rua Beni de Carvalho', 'Aldeota', 'Fortaleza', '444', 6),
('Dra. Quezia Lima', 'quezia.lima', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 92222-4545', 'Rua Visconde do Rio Branco', 'Cocó', 'Fortaleza', '555', 7),
('Dr. Rafael Araújo', 'rafael.araujo', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'INATIVO', '(85) 91111-6767', 'Rua Rocha Lima', 'Benfica', 'Fortaleza', '666', 8),
('Dra. Sabrina Nogueira', 'sabrina.nogueira', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 90000-8989', 'Av. Pontes Vieira', 'Papicu', 'Fortaleza', '777', 9),
('Dr. Tiago Freitas', 'tiago.freitas', 'senha123', 'PROFISSIONAL_DA_SAUDE', 'ATIVO', '(85) 98888-1010', 'Rua Ildefonso Albano', 'Joaquim Távora', 'Fortaleza', '888', 10);

INSERT INTO usuarios (nome, username, senha, role, status, telefone, rua, bairro, cidade, numero_casa, especialidade_id) VALUES
('Amanda Ribeiro', 'amanda.ribeiro', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 98888-1111', 'Rua das Acácias', 'Centro', 'Fortaleza', '101', NULL),
('Beatriz Lima', 'beatriz.lima', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 97777-2222', 'Av. dos Expedicionários', 'Montese', 'Fortaleza', '202', NULL),
('Carlos Eduardo', 'carlos.eduardo', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 96666-3333', 'Rua José Avelino', 'Benfica', 'Fortaleza', '303', NULL),
('Daniela Moura', 'daniela.moura', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 95555-4444', 'Rua Barão de Aracati', 'Aldeota', 'Fortaleza', '404', NULL),
('Eduarda Nunes', 'eduarda.nunes', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 94444-5555', 'Rua Dona Maria Tomásia', 'Meireles', 'Fortaleza', '505', NULL),
('Felipe Andrade', 'felipe.andrade', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 93333-6666', 'Rua Visconde de Mauá', 'Cocó', 'Fortaleza', '606', NULL),
('Giovana Castro', 'giovana.castro', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 92222-7777', 'Rua Professor Costa Mendes', 'Parquelândia', 'Fortaleza', '707', NULL),
('Henrique Sousa', 'henrique.sousa', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 91111-8888', 'Rua João XXIII', 'Aldeota', 'Fortaleza', '808', NULL),
('Isabela Rocha', 'isabela.rocha', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 90000-9999', 'Rua Tibúrcio Cavalcante', 'Centro', 'Fortaleza', '909', NULL),
('Joana Martins', 'joana.martins', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 98888-1212', 'Rua dos Remédios', 'Montese', 'Fortaleza', '112', NULL),
('Kleber Santos', 'kleber.santos', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 97777-3434', 'Rua das Samambaias', 'Benfica', 'Fortaleza', '223', NULL),
('Larissa Freitas', 'larissa.freitas', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 96666-5656', 'Rua Padre Valdevino', 'Aldeota', 'Fortaleza', '334', NULL),
('Marcos Aurélio', 'marcos.aurelio', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 95555-7878', 'Rua Tenente Benévolo', 'Cocó', 'Fortaleza', '445', NULL),
('Nathalia Soares', 'nathalia.soares', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 94444-9898', 'Av. Washington Soares', 'Papicu', 'Fortaleza', '556', NULL),
('Otávio Pereira', 'otavio.pereira', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 93333-2323', 'Rua Senador Pompeu', 'Centro', 'Fortaleza', '667', NULL),
('Priscila Costa', 'priscila.costa', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 92222-4545', 'Rua Major Facundo', 'Centro', 'Fortaleza', '778', NULL),
('Quésia Fernandes', 'quesia.fernandes', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 91111-6767', 'Rua Ana Bilhar', 'Meireles', 'Fortaleza', '889', NULL),
('Rafael Nogueira', 'rafael.nogueira', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 90000-8989', 'Rua Carlos Vasconcelos', 'Aldeota', 'Fortaleza', '990', NULL),
('Sabrina Almeida', 'sabrina.almeida', 'senha123', 'RECEPCIONISTA', 'INATIVO', '(85) 98888-1010', 'Rua Barbosa de Freitas', 'Meireles', 'Fortaleza', '101', NULL),
('Thiago Bezerra', 'thiago.bezerra', 'senha123', 'RECEPCIONISTA', 'ATIVO', '(85) 97777-1111', 'Rua Padre Anchieta', 'Benfica', 'Fortaleza', '202', NULL);

INSERT INTO responsaveis (nome, telefone, parentesco) VALUES
('Mariana Alves', '(85) 98888-0001', 'Mãe'),
('Carlos Henrique', '(85) 98888-0002', 'Pai'),
('Fernanda Silva', '(85) 98888-0003', 'Mãe'),
('João Batista', '(85) 98888-0004', 'Avô'),
('Luciana Rocha', '(85) 98888-0005', 'Tia'),
('Ricardo Gomes', '(85) 98888-0006', 'Pai'),
('Patrícia Moura', '(85) 98888-0007', 'Mãe'),
('Sérgio Lima', '(85) 98888-0008', 'Tio'),
('Natália Souza', '(85) 98888-0009', 'Mãe'),
('Antônio Ferreira', '(85) 98888-0010', 'Pai');

-- 10 pacientes ADULTOS (id_responsavel = NULL)
INSERT INTO pacientes (classificacao_etaria, status, nome, data_nascimento, telefone, rua, bairro, cidade, num_casa, id_responsavel) VALUES
('ADULTO', 'ATIVO', 'Lucas Pereira', '1987-05-10', '(85) 99999-1111', 'Rua das Laranjeiras', 'Centro', 'Fortaleza', 101, NULL),
('ADULTO', 'INATIVO', 'Juliana Mendes', '1990-09-22', '(85) 98888-2222', 'Av. Dom Luís', 'Meireles', 'Fortaleza', 202, NULL),
('ADULTO', 'ATIVO', 'Roberto Silva', '1985-02-14', '(85) 97777-3333', 'Rua das Acácias', 'Aldeota', 'Fortaleza', 303, NULL),
('ADULTO', 'ATIVO', 'Carla Lima', '1995-11-05', '(85) 96666-4444', 'Rua Padre Valdevino', 'Parquelândia', 'Fortaleza', 404, NULL),
('ADULTO', 'INATIVO', 'Marcelo Tavares', '1978-08-19', '(85) 95555-5555', 'Rua João Cordeiro', 'Montese', 'Fortaleza', 505, NULL),
('ADULTO', 'ATIVO', 'Renata Nogueira', '1992-07-30', '(85) 94444-6666', 'Rua Ana Bilhar', 'Cocó', 'Fortaleza', 606, NULL),
('ADULTO', 'ATIVO', 'Thiago Castro', '1989-03-18', '(85) 93333-7777', 'Rua Barbosa de Freitas', 'Benfica', 'Fortaleza', 707, NULL),
('ADULTO', 'INATIVO', 'Aline Rocha', '1996-01-12', '(85) 92222-8888', 'Rua Silva Paulet', 'Papicu', 'Fortaleza', 808, NULL),
('ADULTO', 'ATIVO', 'Eduardo Fernandes', '1984-10-02', '(85) 91111-9999', 'Rua Carlos Vasconcelos', 'Centro', 'Fortaleza', 909, NULL),
('ADULTO', 'ATIVO', 'Letícia Barbosa', '1991-04-25', '(85) 90000-0000', 'Rua Nogueira Acioli', 'Joaquim Távora', 'Fortaleza', 110, NULL);

-- 10 pacientes MENORES (id_responsavel entre 1 e 10)
INSERT INTO pacientes (classificacao_etaria, status, nome, data_nascimento, telefone, rua, bairro, cidade, num_casa, id_responsavel) VALUES
('MENOR', 'ATIVO', 'Beatriz Alves', '2016-03-12', '(85) 98888-1010', 'Rua Pedro I', 'Centro', 'Fortaleza', 201, 1),
('MENOR', 'INATIVO', 'Mateus Henrique', '2014-06-28', '(85) 98888-2020', 'Rua das Rosas', 'Montese', 'Fortaleza', 302, 2),
('MENOR', 'ATIVO', 'Sofia Rocha', '2012-09-05', '(85) 98888-3030', 'Av. Beira Mar', 'Aldeota', 'Fortaleza', 403, 3),
('MENOR', 'ATIVO', 'Enzo Lima', '2015-01-19', '(85) 98888-4040', 'Rua José de Alencar', 'Parquelândia', 'Fortaleza', 504, 4),
('MENOR', 'INATIVO', 'Laura Fernandes', '2013-11-23', '(85) 98888-5050', 'Rua Tenente Benévolo', 'Montese', 'Fortaleza', 605, 5),
('MENOR', 'ATIVO', 'Guilherme Tavares', '2011-12-01', '(85) 98888-6060', 'Rua Dona Leopoldina', 'Cocó', 'Fortaleza', 706, 6),
('MENOR', 'ATIVO', 'Isadora Moura', '2017-02-14', '(85) 98888-7070', 'Rua Visconde do Rio Branco', 'Benfica', 'Fortaleza', 806, 7),
('MENOR', 'INATIVO', 'Caio Nogueira', '2010-07-27', '(85) 98888-8080', 'Rua Rocha Lima', 'Papicu', 'Fortaleza', 906, 8),
('MENOR', 'ATIVO', 'Helena Ribeiro', '2016-05-03', '(85) 98888-9090', 'Av. Pontes Vieira', 'Centro', 'Fortaleza', 1001, 9),
('MENOR', 'ATIVO', 'Lucas Almeida', '2013-08-17', '(85) 98888-0000', 'Rua Ildefonso Albano', 'Joaquim Távora', 'Fortaleza', 1111, 10);