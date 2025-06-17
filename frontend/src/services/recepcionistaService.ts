import api from './api';
import type { Usuarios } from '../types/Usuarios';

type CadastrarRecepcionistaData = Omit<Usuarios, 'id' | 'role' | 'status' | 'especialidade'>;

export const recepcionistaService = {
    listarRecepcionistas: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/recepcionista/visualizarTodos');
        return response.data;
    },

    cadastrarRecepcionista: async (data: CadastrarRecepcionistaData): Promise<void> => {
        await api.post('/recepcionista/cadastrar', data);
    }
}; 