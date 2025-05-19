import './SidebarLogout.css'

interface SidebarOptionProps {
    icon?: React.ReactElement;
    text?: string;
}

const SidebarLogout = ({ icon, text } : SidebarOptionProps) => {

    return (
        <div className="sidebaropcion">
            <button className="opcionLogout">
                <span className="iconLogout">{icon}</span>
                <span className="textLogout" >{text}</span>
            </button>
        </div>
    );
};

export default SidebarLogout