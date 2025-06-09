import api from './api';
import type { Especialidade } from '../types/Especialidade';

export const especialidadeService = {
    listarEspecialidades: async (): Promise<Especialidade[]> => {
        const response = await api.get<Especialidade[]>('/especialidade/visualizarTodos');
        return response.data;
    },
    cadastrarEspecialidade: async (nome: string): Promise<Especialidade> => {
        const response = await api.post<Especialidade>('/especialidade/cadastrar', { nome });
        return response.data;
    },
    editarEspecialidade: async (id: number | string, nome: string): Promise<Especialidade> => {
        const response = await api.put<Especialidade>(`/especialidade/editar/${id}`, {
            id,
            nome
        });
        return response.data;
    },

}; 