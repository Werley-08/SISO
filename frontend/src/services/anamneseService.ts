import api from './api';
import type { Anamnese } from '@/types/Anamnese';

type CadastrarAnamneseData = {
    peso: number;
    altura: number;
    alergias: string;
    medicamentos: boolean;
    doencasCronica: boolean; 
    idPaciente: number;
};

type EditarAnamneseData = Anamnese; 

export const anamneseService = {
    listarPorPaciente: async (pacienteId: number): Promise<Anamnese | null> => {
        const response = await api.get<Anamnese>(`/anamnese/paciente/${pacienteId}`);
        return response.data ?? null;
    },

    cadastrarAnamnese: async (data: CadastrarAnamneseData): Promise<void> => {
          console.log("🔎 Enviando para API:", data);
        await api.post('/anamnese/cadastrar', data);
    },

    editarAnamnese: async (data: EditarAnamneseData): Promise<void> => {
        await api.put(`/anamnese/editar/${data.id}`, data);
    }
};
