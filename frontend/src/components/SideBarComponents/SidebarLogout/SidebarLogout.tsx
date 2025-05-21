import './SidebarLogout.css'

interface SidebarOptionProps {
    icon?: React.ReactElement;
    text?: string;
}

const SidebarLogout = ({ icon, text } : SidebarOptionProps) => {

    return (
        <div className="sidebar-logout-wrapper">
            <button className="sidebar-logout-button">
                <span className="sidebar-logout-icon">{icon}</span>
                <span className="sidebar-logout-text">{text}</span>
            </button>
        </div>
    );
};

export default SidebarLogout