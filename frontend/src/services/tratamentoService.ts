import api from "./api";
import type { Tratamento } from "@/types/Tratamento";

type CadastrarTratamentoData = {
    data_inicio: string;
    outras_informacoes?: string;
    profissional_id: number;
    procedimento_id: number;
    paciente_id: number;
}

export const tratamentoService = {
    listarTratamentos: async (pacienteId: number): Promise<Tratamento[]> => {
        const response = await api.get<Tratamento[]>(`/tratamento/visualizarTodosByPaciente/${pacienteId}`);
        return response.data;
    },

    cadastrarTratamento: async (data: CadastrarTratamentoData): Promise<void> => {
        await api.post('/tratamento/cadastrar', data);
    },

    visualizarTratamentoById: async (id: number): Promise<Tratamento> => {
        const response = await api.get<Tratamento>(`/tratamento/visualizarById/${id}`);
        return response.data;
    },

    editarAnotacaoClinica: async (id: number, anotacao: string): Promise<void> => {
        await api.put(`/tratamento/anotacoes/${id}`, {
            outras_informacoes: anotacao
        });
    }
};