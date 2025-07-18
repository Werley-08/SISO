import api from './api';
import type { Usuarios } from '../types/Usuarios';
import type { HorariosDeAtendimento } from '@/types/HorariosDeAtendimento';

type CadastrarProfissionalData = Omit<Usuarios, 'id' | 'role' | 'status'>;
type EditarProfissionalData = Omit<Usuarios, 'role' | 'especialidade'> & {
    especialidade: { id: number };
};

type CadastrarHorarioDeAtendimento = Omit<HorariosDeAtendimento, 'id'>;

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
    },

    cadastrarHorarioDeAtendimento: async (id: number, data: CadastrarHorarioDeAtendimento): Promise<Usuarios> => {
        const response = await api.post(`/horarioAtendimento/cadastrar/${id}`, data);
        return response.data;
    },

    deletarHorarioDeAtendimento: async (idProfissional: number, idHorario: number) => {
        await api.delete(`/horarioAtendimento/deletar/${idProfissional}/${idHorario}`);
    },

    visualizarQtdProfissionais: async (): Promise<number> => {
        const response = await api.get<number>('/estatisticas/visualizarQtdProfissionais');
        return response.data;
    }
}; 