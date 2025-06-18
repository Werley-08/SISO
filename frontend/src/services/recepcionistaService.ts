import api from './api';
import type { Usuarios } from '../types/Usuarios';

type RecepcionistaData = Omit<Usuarios, 'id' | 'role' | 'status' | 'especialidade'>;

export const recepcionistaService = {
    listarRecepcionistas: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/recepcionista/visualizarTodos');
        return response.data;
    },

    cadastrarRecepcionista: async (data: RecepcionistaData): Promise<void> => {
        await api.post('/recepcionista/cadastrar', data);
    },

    editarRecepcionista: async (id: number, data: RecepcionistaData): Promise<void> => {
        await api.put(`/recepcionista/editar/${id}`, data)
    }
}; 