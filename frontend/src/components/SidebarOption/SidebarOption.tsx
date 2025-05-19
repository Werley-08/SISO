import './SidebarOption.css'

interface SidebarOptionProps {
    icon?: React.ReactElement;
    text?: string;
}

const SidebarOption = ({ icon, text } : SidebarOptionProps) => {

    return (
        <div className="sidebaropcion">
            <button className="opcion">
                <span className="icon">{icon}</span>
                <span className="text" >{text}</span>
            </button>
        </div>
    );
};

export default SidebarOption