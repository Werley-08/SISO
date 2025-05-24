import api from './api';

interface LoginResponse {
    token: string;
}

interface LoginCredentials {
    username: string;
    senha: string;
}

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>('/auth/logar', credentials);
        return response.data;
    }
};
