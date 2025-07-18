import api from './api';
import type { Paciente } from '@/types/Paciente';

type CadastrarPacienteData = {
    nome: string;
    data_nascimento: string;
    telefone: string;
    rua: string;
    bairro: string;
    cidade: string;
    num_casa: string;
    classificacao_etaria: string;
    responsavel?: {
        nome: string;
        telefone: string;
        parentesco: string;
    };
};

type EditarPacienteData = Omit<Paciente, "status"> & {
    responsavel?: {
        id?: number;
        nome: string;
        telefone: string;
        parentesco: string;
    };
};


export const pacienteService = {
    listarPacientes: async (): Promise<Paciente[]> => {
        const response = await api.get<Paciente[]>('/paciente/visualizarTodos');
        return response.data;
    },

    cadastrarPaciente: async (data: CadastrarPacienteData): Promise<void> => {
        await api.post('/paciente/cadastrar', data);
    },

    editarPaciente: async (data: EditarPacienteData): Promise<void> => {
        await api.put(`/paciente/editar/${data.id}`, data);
    },

    visualizarQtdPacientes: async (): Promise<number> => {
        const response = await api.get<number>('/estatisticas/visualizarQtdPacientes');
        return response.data;
    }
};
