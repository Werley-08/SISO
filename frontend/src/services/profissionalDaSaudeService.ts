import api from './api';
import type { Usuarios } from '../types/Usuarios';

type CadastrarProfissionalData = Omit<Usuarios, 'id' | 'role' | 'status'>;
type EditarProfissionalData = Omit<Usuarios, 'role' | 'especialidade'> & {
    especialidade: { id: number };
};

export const profissionalDaSaudeService = {
    listarProfissionais: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/profissionalDaSaude/visualizarTodos');
        return response.data;
    },

    cadastrarProfissional: async (data: CadastrarProfissionalData): Promise<void> => {
        await api.post('/profissionalDaSaude/cadastrar', data);
    },

    editarProfissional: async (id: number, data: EditarProfissionalData): Promise<void> => {
        await api.put(`/profissionalDaSaude/editar/${id}`, data);
    }
}; 