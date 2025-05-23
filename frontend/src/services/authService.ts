import axios from 'axios';

interface LoginResponse {
    token: string;
}

interface LoginCredentials {
    username: string;
    senha: string;
}

const API_URL = 'http://localhost:8080/api';

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        const response = await axios.post<LoginResponse>(`${API_URL}/auth/logar`, credentials);
        return response.data;
    }
}; 