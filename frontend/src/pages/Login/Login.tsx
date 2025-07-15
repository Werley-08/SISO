import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/SISO---LogoLOGO---2.png';
import Ribbons from '../../components/Ribbons/Ribbons';
import BlurText from '../../components/BlurText/BlurText';
import { toast } from 'sonner';
import api from '@/services/api';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/logar", {
                username: login,
                senha: password,
            });

            const { token, role } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            navigate('/DashBoard');

            toast.success("Logado com sucesso!");
        } catch (error) {
            toast.error("Erro no login: " + error);
        }
    };


    return (
        <div className="login-container">
            <div className="login-container__brand-panel">
                <div className="login-container__ribbons">
                    <Ribbons
                        baseThickness={50}
                        colors={['#48C9B0']}
                        speedMultiplier={0.5}
                        maxAge={500}
                        enableFade={true}
                        enableShaderEffect={false}
                    />
                </div>
                <img className="login-brand-logo" src={logo} alt="SISO Logo" />
            </div>

            <div className="login-container__form-panel">

                <div className="login-form-container">
                    <div className="login-form-container__header">
                        <div className="login-form-container__subtitle">
                            <BlurText
                                text="Bem-vindo de volta!"
                                delay={300}
                                animateBy="words"
                                direction="top"
                                className="text-2xl mb-8"
                            />
                        </div>
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
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 