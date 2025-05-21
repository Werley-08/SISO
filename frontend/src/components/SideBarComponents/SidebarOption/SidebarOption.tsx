import './SidebarOption.css'

interface SidebarOptionProps {
    icon?: React.ReactElement;
    text?: string;
}

const SidebarOption = ({ icon, text } : SidebarOptionProps) => {

    return (
        <div className="sidebar-option-wrapper">
            <button className="sidebar-option-button">
                <span className="sidebar-option-icon">{icon}</span>
                <span className="sidebar-option-text">{text}</span>
            </button>
        </div>
    );
};

export default SidebarOption