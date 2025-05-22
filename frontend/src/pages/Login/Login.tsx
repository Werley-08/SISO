import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/SISO---LogoLOGO---2.png';
import axios from 'axios';
import { toast } from 'react-toastify';

interface LoginResponse {
    token: string;
}

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post<LoginResponse>('http://localhost:8080/api/auth/logar', {
                username: login,
                senha: password
            });

            const token = response.data.token;

            localStorage.setItem('token', token);

            navigate('/DashBoard');
            toast.success("Seja bem-vindo!")
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            toast.error('O Login falhou. Verifique as credenciais!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-container__brand-panel">
                <img className="login-brand-logo" src={logo} alt="SISO Logo" />
            </div>

            <div className="login-container__form-panel">
                <div className="login-form-container">
                    <div className="login-form-container__header">
                        <p className="login-form-container__subtitle">Bem-vindo de volta!</p>
                        <p className="login-form-container__title">Faça seu login</p>
                    </div>

                    <form className="login-form-container__form" onSubmit={handleSubmit}>
                        <p className="login-form-container__label">Login</p>
                        <input
                            className="login-form-container__input"
                            type="text"
                            placeholder="digite seu login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <p className="login-form-container__label">Senha</p>
                        <input
                            className="login-form-container__input"
                            type="password"
                            placeholder="digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="login-form-container__submit">
                            <p>Login</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 