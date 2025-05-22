import type { Usuarios } from '../../types/Usuarios';

export const ProfissionalDaSaudeMock: Usuarios[] = [
  {
    nome: "Dra. Ana Clara Mendes",
    username: "ana.mendes",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(85) 99999-8888",
    rua: "Rua das Flores",
    bairro: "Centro",
    cidade: "Fortaleza",
    numero_casa: "123",
    especialidade: {
      id: 1,
      nome: "Dentista-Cirurgião Clínico"
    }
  },
  {
    nome: "Dr. João Pedro Lima",
    username: "joao.p.lima",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(11) 98888-7777",
    rua: "Av. Paulista",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    numero_casa: "456",
    especialidade: {
      id: 2,
      nome: "Ortodontia"
    }
  },
  {
    nome: "Dra. Mariana Alves",
    username: "mariana.alves",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "INATIVO",
    telefone: "(85) 99999-1111",
    rua: "Rua dos Médicos",
    bairro: "Aldeota",
    cidade: "Fortaleza",
    numero_casa: "789",
    especialidade: {
      id: 3,
      nome: "Endodontia"
    }
  },
  {
    nome: "Dr. Carlos Eduardo",
    username: "carlos.edu",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(31) 97777-2222",
    rua: "Rua das Acácias",
    bairro: "Savassi",
    cidade: "Belo Horizonte",
    numero_casa: "101",
    especialidade: {
      id: 4,
      nome: "Odontopediatria"
    }
  },
  {
    nome: "Dra. Fernanda Souza",
    username: "fernanda.souza",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(21) 99888-4444",
    rua: "Rua das Palmeiras",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro",
    numero_casa: "321",
    especialidade: {
      id: 5,
      nome: "Periodontia"
    }
  },
  {
    nome: "Dr. Ricardo Martins",
    username: "ricardo.martins",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "INATIVO",
    telefone: "(41) 98765-4321",
    rua: "Av. das Araucárias",
    bairro: "Água Verde",
    cidade: "Curitiba",
    numero_casa: "654",
    especialidade: {
      id: 6,
      nome: "Cirurgia Bucomaxilofacial"
    }
  },
  {
    nome: "Dra. Luana Ribeiro",
    username: "luana.ribeiro",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(27) 99666-7788",
    rua: "Rua do Sol",
    bairro: "Praia do Canto",
    cidade: "Vitória",
    numero_casa: "789",
    especialidade: {
      id: 7,
      nome: "Prótese Dentária"
    }
  },
  {
    nome: "Dr. Marcelo Torres",
    username: "marcelo.torres",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "ATIVO",
    telefone: "(62) 98555-2211",
    rua: "Rua das Laranjeiras",
    bairro: "Setor Bueno",
    cidade: "Goiânia",
    numero_casa: "852",
    especialidade: {
      id: 8,
      nome: "Radiologia Odontológica"
    }
  },
  {
    nome: "Dra. Camila Ferreira",
    username: "camila.ferreira",
    senha: null,
    role: "PROFISSIONAL DA SAÚDE",
    status: "INATIVO",
    telefone: "(95) 91234-5678",
    rua: "Av. das Nações",
    bairro: "Centro",
    cidade: "Boa Vista",
    numero_casa: "147",
    especialidade: {
      id: 9,
      nome: "Estomatologia"
    }
  }
];