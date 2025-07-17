import type { Sessao } from './Sessao';
import type { Procedimento } from './Procedimento';
import type { Usuarios } from './Usuarios';
import type { Paciente } from './Paciente';

export type Tratamento = {
    id: number;
    data_inicio: string;
    data_finalizacao?: string;
    status: string;
    outras_informacoes?: string;
    procedimento: Procedimento;
    paciente: Paciente;
    profissional: Usuarios;
    sessoes: Sessao[];
};