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
    },

    editarAnotacaoSessao: async (id: number, anotacao: string): Promise<void> => {
        await api.put(`/sessao/anotacoes/${id}`, {
            outras_informacoes: anotacao
        });
    },

    cancelarSessao: async(id: number): Promise<void> => {
        await api.put(`/sessao/cancelar/${id}`);
    },

    concluirSessao: async(id: number): Promise<void> => {
        await api.put(`/sessao/concluir/${id}`);
    }
}; 