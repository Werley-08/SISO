import api from './api';
import type { Tratamento } from '@/types/Tratamento';

export const tratamentoService = {
    visualizarTratamentoById: async (id: number): Promise<Tratamento> => {
        const response = await api.get<Tratamento>(`/tratamento/visualizarById/${id}`);
        return response.data;
    }
}; 