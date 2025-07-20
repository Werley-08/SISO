import api from './api';
import type { Sessao } from '@/types/Sessao';

type CadastrarSessaoData = {
    data: string;
    hora_inicio: string;
    hora_finalizacao: string;
    outras_informacoes?: string;
}

export const sessaoService = {
    listarSessoes: async (date: string): Promise<Sessao[]> => {
        const response = await api.get<Sessao[]>(`/sessao/visualizar?data=${date}`);
        return response.data;
    },

    visualizarQtdSessoes: async (): Promise<number> => {
        const response = await api.get<number>('/estatisticas/visualizarQtdAgendamentos');
        return response.data;
    },

    cadastrarSessao: async(tratamentoID: number, data: CadastrarSessaoData): Promise<void> => {
        await api.post(`/sessao/cadastrar/${tratamentoID}`, data);
    }
}; 