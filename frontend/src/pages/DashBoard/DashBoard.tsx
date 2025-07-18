import Orb from '@/components/Animations/Backgrounds/Orb/Orb';
import Sidebar from '../../components/SideBarComponents/Sidebar/Sidebar';
import './DashBoard.css';
import DashboardCard from '@/components/DashboardCard/DashboardCard';

const DashBoard = () => {
    const pacientesCount = 120;
    const agendamentosCount = 45;
    const profissionaisCount = 12;
    const recepcionistasCount = 4;

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
                <DashboardCard title="Pacientes" value={pacientesCount} />
                <DashboardCard title="Agendamentos" value={agendamentosCount} />
                <DashboardCard title="Profissionais" value={profissionaisCount} />
                <DashboardCard title="Recepcionistas" value={recepcionistasCount} />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;