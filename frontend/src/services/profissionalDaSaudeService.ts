import api from './api';
import type { Usuarios } from '../types/Usuarios';

type CadastrarProfissionalData = Omit<Usuarios, 'id' | 'role' | 'status'>;

export const profissionalDaSaudeService = {
    listarProfissionais: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/profissionalDaSaude/visualizarTodos');
        return response.data;
    },

    cadastrarProfissional: async (data: CadastrarProfissionalData): Promise<void> => {
        await api.post('/profissionalDaSaude/cadastrar', data);
    }
}; 