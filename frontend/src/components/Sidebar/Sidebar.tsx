import './Sidebar.css'
import SidebarOption from "../SidebarOption/SidebarOption"
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown"
import SidebarLogout from '../SidebarLogout/SidebarLogout'
import logo from "../../assets/images/SISO---LogoLOGO---4.png"
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard-icon.svg"
import { ReactComponent as PacientIcon } from "../../assets/icons/Paciente-icon.svg"
import { ReactComponent as UserIcon } from "../../assets/icons/Usuario-icon.svg"
import { ReactComponent as ScheduleIcon } from "../../assets/icons/Agendamentos-icon.svg"

const Sidebar = () => {

    const dropdownOptions = [
        {
            text: "Recepcionista",
            onClick: () => console.log("Opção 1 clicada")
        },
        {
            text: "Profissional da Saúde",
            onClick: () => console.log("Opção 2 clicada")
        }
    ];

    return (
        <div className="sidebar">
            <div className="main-layout-inside">
                <div className="logo-layout">
                    <img className="logo" src={logo}/>
                </div>

                <div className="sidebar-options">
                    <div className="option">
                        <SidebarOption icon={<DashboardIcon />} text="Dashboard"/>
                    </div>
                    <div className="option">
                        <SidebarOption icon={<PacientIcon />} text="Pacientes"/>
                    </div>
                    <div className="option">
                        <SidebarDropdown 
                            icon={<UserIcon />} 
                            text="Usuários" 
                            options={dropdownOptions}
                        />
                    </div>
                    <div className="option">
                        <SidebarOption icon={<ScheduleIcon />} text="Agendamentos"/>
                    </div>
                </div>

                <div className="footer">
                    <div className="option">
                        <SidebarLogout icon={<DashboardIcon />} text="Logout"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar