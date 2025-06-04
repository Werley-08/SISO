import axios from "axios";

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        // Skip adding Authorization header for login endpoint
        if (config.url === '/auth/logar') {
            return config;
        }

        const token = localStorage.getItem("token");

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;