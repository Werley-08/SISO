import api from './api';
import type { Sessao } from '@/types/Sessao';

export const sessaoService = {
    listarSessoes: async (date: string): Promise<Sessao[]> => {
        const response = await api.get<Sessao[]>(`/sessao/visualizar?data=${date}`);
        return response.data;
    },
}; 