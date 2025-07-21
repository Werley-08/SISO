import api from './api';
import type { Anamnese } from '@/types/Anamnese';

type CadastrarAnamneseData = {
    peso: number;
    altura: number;
    alergias: string;
    medicamentos: boolean;
    doencas_cronicas: boolean;
    paciente: { id: number };
};

type EditarAnamneseData = {
    id: number;
    peso: number;
    altura: number;
    alergias: string;
    medicamentos: boolean;
    doencasCronica: boolean;
    paciente: { id: number };
};

export const anamneseService = {
    visualizarAnamnese: async (pacienteId: number): Promise<Anamnese | null> => {
        const response = await api.get<Anamnese>(`/anamnese/visualizar/${pacienteId}`);
        return response.data;
    },

    cadastrarAnamnese: async (data: CadastrarAnamneseData): Promise<void> => {
        await api.post('/anamnese/cadastrar', data);
    },

    editarAnamnese: async (data: EditarAnamneseData): Promise<void> => {
        await api.put(`/anamnese/editar/${data.id}`, data);
    }
};
