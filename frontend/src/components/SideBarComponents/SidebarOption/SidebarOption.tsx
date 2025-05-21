import './SidebarOption.css'

interface SidebarOptionProps {
    icon?: React.ReactElement;
    text?: string;
    onClick?: () => void;
}

const SidebarOption = ({ icon, text, onClick } : SidebarOptionProps) => {

    return (
        <div className="sidebar-option-wrapper">
            <button className="sidebar-option-button" onClick={onClick}>
                <span className="sidebar-option-icon">{icon}</span>
                <span className="sidebar-option-text">{text}</span>
            </button>
        </div>
    );
};

export default SidebarOption