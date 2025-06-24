import api from './api';
import type { Procedimento } from "../types/Procedimento";

export const procedimentoService = {
    listarProcedimentos: async (): Promise<Procedimento[]> => {
        const response = await api.get<Procedimento[]>('/procedimento/visualizarTodos');
        return response.data;
    },
     cadastrarProcedimento: async (dados: Partial<Procedimento>): Promise<void> => {
        await api.post('/procedimento/cadastrar', dados);
    }
    ,editarProcedimento: async (id: number, dados: Partial<Procedimento>): Promise<void> => {
    await api.put(`/procedimento/editar/${id}`, dados);
  },
}; 