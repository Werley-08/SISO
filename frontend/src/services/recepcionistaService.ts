import api from './api';
import type { Usuarios } from '../types/Usuarios';

export const recepcionistaService = {
    listarRecepcionistas: async (): Promise<Usuarios[]> => {
        const response = await api.get<Usuarios[]>('/recepcionista/visualizarTodos');
        return response.data;
    }
}; 