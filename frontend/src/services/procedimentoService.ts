import api from './api';
import type { Procedimento } from "../types/Procedimento";

export const procedimentoService = {
    listarProcedimentos: async (): Promise<Procedimento[]> => {
        const response = await api.get<Procedimento[]>('/procedimento/visualizarTodos');
        return response.data;
    },
}; 