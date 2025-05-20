import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/SISO---LogoLOGO---2.png';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', login, 'Password:', password);
        navigate('/GerenciamentoDeUsuarios');
    };

    return (
        <div className="main-layout">
            <div className="main-layout__left-panel">
                <img className="brand-logo" src={logo} alt="SISO Logo" />
            </div>

            <div className="main-layout__right-panel">
                <div className="login-section">
                    <div className="login-section__header">
                        <p className="login-section__subtitle">Bem-vindo de volta!</p>
                        <p className="login-section__title">Faça seu login</p>
                    </div>

                    <form className="login-section__form" onSubmit={handleSubmit}>
                        <p className="login-section__form-label">Login</p>
                        <input 
                            className="login-section__form-input" 
                            type="text" 
                            placeholder="digite seu login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <p className="login-section__form-label">Senha</p>
                        <input 
                            className="login-section__form-input" 
                            type="password" 
                            placeholder="digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="login-section__submit-button">
                            <p>Login</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 