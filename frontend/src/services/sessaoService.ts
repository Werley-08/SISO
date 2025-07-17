import api from './api';
import type { Sessao } from '@/types/Sessao';

export const sessaoService = {
    listarSessoesRecepcionista: async (date: string): Promise<Sessao[]> => {
        const response = await api.get<Sessao[]>(`/sessao/visualizar?data=${date}`);
        return response.data;
    },
}; 