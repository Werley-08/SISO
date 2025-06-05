import './ActionMenu.css'

type Props = {
  className?: string;
  icons: {
        icon: React.ReactNode;
        onClick: () => void;
    }[];
};

const ActionMenu = ({className = "", icons}: Props) => {

    return (
        <div className={`actionmenu-container ${className}`}>
            {icons?.map((icon, index) => (
                <div key={index} className="actionmenu-container__icon" onClick={icon.onClick}>
                    {icon.icon}
                </div>
            ))}
        </div>
    );
};

export default ActionMenu