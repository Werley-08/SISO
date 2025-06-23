import type { Responsavel } from "./Responsavel";

export interface Paciente {
    id: number;
    classificacao_etaria: string;
    status: string;
    nome: string;
    data_nascimento: string;
    telefone: string;
    rua: string;
    bairro: string;
    cidade: string;
    num_casa: string;
    Responsavel: Responsavel | null;
}