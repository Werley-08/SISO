import api from './api';
import type { Especialidade } from '../types/Especialidade';

type CadastrarEspecialidadeData = Omit<Especialidade, "id">;

export const especialidadeService = {
    listarEspecialidades: async (): Promise<Especialidade[]> => {
        const response = await api.get<Especialidade[]>('/especialidade/visualizarTodos');
        return response.data;
    },

    cadastrarEspecialidade: async (data: CadastrarEspecialidadeData): Promise<Especialidade> => {
        const response = await api.post<Especialidade>('/especialidade/cadastrar', data);
        return response.data;
    }

}; 