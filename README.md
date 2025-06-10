# Sistema Integrado de Saúde odontólogica (SISO)

Este repositório contém o sistema de gerenciamento odontológico desenvolvido sob medida para a Clínica Ortomaia. O objetivo do sistema é informatizar e otimizar os processos operacionais da clínica, oferecendo uma solução eficiente, segura e de fácil utilização.

## 📂 Estrutura do Projeto

- `backend/`: API REST desenvolvida com Java e Spring Boot, responsável pela lógica de negócio e persistência de dados.
- `frontend/`: Aplicação web desenvolvida com React e TypeScript, responsável pela interface do usuário.

## 🚀 Funcionalidades Principais

- Cadastro e gerenciamento de pacientes
- Agendamento de consultas
- Prontuários eletrônicos
- Histórico de atendimentos
- Cadastro de procedimentos
- Gerenciamento de profissionais da saúde
- Controle de usuários e permissões de acesso

## 📌 Funcionalidades Fora do Escopo

- Integração com sistemas externos
- Emissão de notas fiscais eletrônicas
- Controle financeiro detalhado

## 🛠️ Tecnologias Utilizadas

- Java + Spring Boot (backend)
- React + TypeScript (frontend)
- PostgreSQL (banco de dados)
- Docker (ambiente de desenvolvimento e produção)

---

## 📦 Como Executar o Back-end com Docker Compose

Com o repositório já clonado e com o docker já instalado(e rodando)

Construa a imagem, usando o comando:

    - "docker-compose build"

Depois, suba o container, usando o comando:

    - "docker-compose up"

- Acesse o Back-end: O servidor estará disponível em http://localhost:8080.

---

## 🖥️ Como Executar o Front-end

Entre na pasta do front-end, usando o comando:

    - "cd frontend"

Instale as dependências do Front-end, usando o comando:

    - "npm i"

Por fim, execute, usando o comando:

    - "npm run dev"

---

## 🔗 O sistema só funcionara se você estiver rodando o front e o back
