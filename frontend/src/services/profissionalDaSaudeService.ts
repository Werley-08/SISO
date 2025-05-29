import api from './api';
import type { Usuarios } from '../types/Usuarios';

export const profissionalDaSaudeService = {
    listarProfissionais: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/profissionalDaSaude/visualizarTodos');
        return response.data;
    }
}; 