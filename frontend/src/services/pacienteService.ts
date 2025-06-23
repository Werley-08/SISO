import api from './api';
import type { Paciente } from '@/types/Paciente';

export const pacienteService = {
    listarPacientes: async (): Promise<Paciente[]> => {
        const response = await api.get<Paciente[]>('/paciente/visualizarTodos');
        return response.data;
    },
}; 