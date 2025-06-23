import type { Responsavel } from '@/types/Responsavel';
import api from './api';
import type { Paciente } from '@/types/Paciente';

type CadastrarPacienteData = Omit<Paciente, 'id' | 'status' | 'Responsavel'> & {
    Responsavel?: Omit<Responsavel, 'id'>;
};

export const pacienteService = {
    listarPacientes: async (): Promise<Paciente[]> => {
        const response = await api.get<Paciente[]>('/paciente/visualizarTodos');
        return response.data;
    },

    cadastrarPaciente: async (data: CadastrarPacienteData): Promise<void> => {
        await api.post('/paciente/cadastrar', data);
    },
}; 