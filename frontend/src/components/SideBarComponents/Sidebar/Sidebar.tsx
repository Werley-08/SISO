import './Sidebar.css'
import SidebarOption from "../SidebarOption/SidebarOption"
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown"
import SidebarLogout from '../SidebarLogout/SidebarLogout'
import logo from "../../../assets/images/SISO---LogoLOGO---4.png"
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard-icon.svg"
import { ReactComponent as PacientIcon } from "../../../assets/icons/Paciente-icon.svg"
import { ReactComponent as UserIcon } from "../../../assets/icons/Usuario-icon.svg"
import { ReactComponent as ScheduleIcon } from "../../../assets/icons/Agendamentos-icon.svg"
import { ReactComponent as LogoutIcon } from "../../../assets/icons/Logout-icon.svg"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/Dashboard');
    };

    const handleDashboardClick = () => {
        navigate('/Dashboard');
    };

    const handlePacienteClick = () => {
        navigate('/GerenciamentoDePaciente');
    };

    const dropdownOptions = [
        {
            text: "Recepcionista",
            onClick: () => navigate('/GerenciamentoDeRecepcionista')
        },
        {
            text: "Profissional da Saúde",
            onClick: () => navigate('/GerenciamentoDeProfissionalDaSaude')
        }
    ];

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="sidebar-logo-container">
                    <img 
                        className="sidebar-logo" 
                        src={logo} 
                        alt="SISO Logo"
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="sidebar-menu">
                    <div className="menu-item">
                        <SidebarOption 
                            icon={<DashboardIcon />} 
                            text="Dashboard"
                            onClick={handleDashboardClick}
                        />
                    </div>
                    <div className="menu-item">
                        <SidebarOption 
                            icon={<PacientIcon />} 
                            text="Pacientes"
                            onClick={handlePacienteClick}
                        />
                    </div>
                    <div className="menu-item">
                        <SidebarDropdown 
                            icon={<UserIcon />} 
                            text="Usuários" 
                            options={dropdownOptions}
                        />
                    </div>
                    <div className="menu-item">
                        <SidebarOption icon={<ScheduleIcon />} text="Agendamentos"/>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className="menu-item">
                        <SidebarLogout icon={<LogoutIcon />} text="Logout"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar