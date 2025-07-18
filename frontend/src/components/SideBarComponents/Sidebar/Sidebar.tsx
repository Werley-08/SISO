import './Sidebar.css'
import SidebarOption from "../SidebarOption/SidebarOption"
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown"
import SidebarLogout from '../SidebarLogout/SidebarLogout'
import logo from "../../../assets/images/SISO---LogoLOGO---4.png"
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard-icon.svg"
import { ReactComponent as PacientIcon } from "../../../assets/icons/Paciente-icon.svg"
import { ReactComponent as UserIcon } from "../../../assets/icons/Usuario-icon.svg"
import { ReactComponent as ScheduleIcon } from "../../../assets/icons/Agendamentos-icon.svg"
import { ReactComponent as TeethIcon } from "../../../assets/icons/Teeth-icon.svg"
import { ReactComponent as LogoutIcon } from "../../../assets/icons/Logout-icon.svg"
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role') || '';

    const handleLogoClick = () => {
        navigate('/Dashboard');
    };

    const handleDashboardClick = () => {
        navigate('/Dashboard');
    };

    const handlePacienteClick = () => {
        navigate('/GerenciamentoDePaciente');
    };

    const handleAgendamentoClick = () => {
        navigate('/GerenciamentoDeAgendamentos');
    };

    const handleProcedimentoClick = () => {
        navigate('/GerenciamentoDeProcedimento');
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

    // Definição centralizada das opções de menu
    const menuOptions = [
        {
            key: 'dashboard',
            component: (
                <SidebarOption 
                    icon={<DashboardIcon />} 
                    text="Dashboard"
                    onClick={handleDashboardClick}
                />
            ),
            allowedRoles: ['ADMIN', 'RECEPCIONISTA', 'PROFISSIONAL_DA_SAUDE'],
        },
        {
            key: 'pacientes',
            component: (
                <SidebarOption 
                    icon={<PacientIcon />} 
                    text="Pacientes"
                    onClick={handlePacienteClick}
                />
            ),
            allowedRoles: ['RECEPCIONISTA', 'PROFISSIONAL_DA_SAUDE'],
        },
        {
            key: 'usuarios',
            component: (
                <SidebarDropdown 
                    icon={<UserIcon />} 
                    text="Usuários" 
                    options={dropdownOptions}
                />
            ),
            allowedRoles: ['ADMIN'],
        },
        {
            key: 'agendamentos',
            component: (
                <SidebarOption 
                    icon={<ScheduleIcon />} 
                    text="Agendamentos" 
                    onClick={handleAgendamentoClick}
                />
            ),
            allowedRoles: ['RECEPCIONISTA', 'PROFISSIONAL_DA_SAUDE'],
        },
        {
            key: 'procedimentos',
            component: (
                <SidebarOption 
                    icon={<TeethIcon />} 
                    text="Procedimentos"
                    onClick={handleProcedimentoClick}   
                />
            ),
            allowedRoles: ['ADMIN'],
        },
    ];

    // Filtra as opções de menu conforme a role
    const filteredMenuOptions = menuOptions.filter(option => option.allowedRoles.includes(role));

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
                    {filteredMenuOptions.map(option => (
                        <div className="menu-item" key={option.key}>
                            {option.component}
                        </div>
                    ))}
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