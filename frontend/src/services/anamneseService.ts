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
    doencasCronica: boolean;  // camelCase no TypeScript
    paciente: { id: number };
};

export const anamneseService = {
    visualizarAnamnese: async (pacienteId: number): Promise<Anamnese | null> => {
        const response = await api.get<Anamnese>(`/anamnese/visualizar/${pacienteId}`);
        return response.data;
    },

    cadastrarAnamnese: async (data: CadastrarAnamneseData): Promise<void> => {
        console.log("🔎 Enviando para API:", data);
        await api.post('/anamnese/cadastrar', data);
    },

    editarAnamnese: async (data: EditarAnamneseData): Promise<void> => {
        const payload = {
            id: data.id,
            peso: data.peso,
            altura: data.altura,
            alergias: data.alergias,
            medicamentos: data.medicamentos,
            doencas_cronicas: data.doencasCronica,
            paciente: { id: data.paciente.id }
        };
        console.log("🔎 Enviando para API:", payload);
        await api.put(`/anamnese/editar/${data.id}`, payload);
    }
};
