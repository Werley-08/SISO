import Orb from '@/components/Animations/Backgrounds/Orb/Orb';
import Sidebar from '../../components/SideBarComponents/Sidebar/Sidebar';
import './DashBoard.css';
import DashboardCard from '@/components/DashboardCard/DashboardCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { profissionalDaSaudeService } from '@/services/profissionalDaSaudeService';
import { useCallback } from 'react';
import { pacienteService } from '@/services/pacienteService';

const DashBoard = () => {
    const agendamentosCount = 45;
    const recepcionistasCount = 4;
    const [loading, setLoading] = useState(true);
    const [profissionaisCount, setProfissionaisCount] = useState(0);
    const [pacientesCount, setPacientesCount] = useState(0);

    const role = localStorage.getItem('role') || '';

    const getRoleLabel = (role: string) => {
        switch (role) {
            case 'ADMIN':
                return 'Administrador';
            case 'RECEPCIONISTA':
                return 'Recepcionista';
            case 'PROFISSIONAL_DA_SAUDE':
                return 'Profissional da Saúde';
            default:
                return 'Desconhecido';
        }
    };

    const fetchEstatisticas = useCallback(async () => {
        try {
            setLoading(true);

            const data1 = await profissionalDaSaudeService.visualizarQtdProfissionais();
            setProfissionaisCount(data1);

            const data2 = await pacienteService.visualizarQtdPacientes();
            setPacientesCount(data2);

        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEstatisticas();
    }, [fetchEstatisticas]);

    return (
        <div className="dashboard-container">
            <div className="dashboard-container__sidebar">
                <Sidebar />
            </div>

            <div className="dashboard-container__content">
                <div className="dashboard-role-indicator">
                    <span>Perfil de usuário: {getRoleLabel(role)}</span>
                </div>
                <div className="dashboard-welcome-message">
                    <h2>Bem-vindo ao Painel de Controle do SISO!</h2>
                    <p>Aqui você pode acompanhar os principais indicadores do sistema.</p>
                </div>
                <div className="dashboard-animation">
                    <Orb
                        hoverIntensity={0.7}
                        rotateOnHover={true}
                        hue={40}
                        forceHoverState={false}
                    />
                </div>

                <div className="dashboard-main-row">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <DashboardCard title="Pacientes" value={pacientesCount} />
                    )}

                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <DashboardCard title="Agendamentos" value={agendamentosCount} />
                    )}

                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <DashboardCard title="Profissionais" value={profissionaisCount} />
                    )}

                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <DashboardCard title="Recepcionistas" value={recepcionistasCount} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;