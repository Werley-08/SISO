import type { Especialidade } from './Especialidade.ts';
import type { HorariosDeAtendimento } from './HorariosDeAtendimento.ts';

export interface Usuarios {
  id: number;
  nome: string;
  username: string;
  senha: string;
  role: string;
  status: string;
  telefone: string;
  rua: string;
  bairro: string;
  cidade: string;
  numero_casa: string;
  especialidade: Especialidade | null;
  horarios_atendimento?: HorariosDeAtendimento[];
}