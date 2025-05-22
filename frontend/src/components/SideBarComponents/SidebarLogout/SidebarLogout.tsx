import { toast } from "react-toastify";
import "./SidebarLogout.css";
import { useNavigate } from "react-router-dom";

interface SidebarOptionProps {
  icon?: React.ReactElement;
  text?: string;
}

const SidebarLogout = ({ icon, text }: SidebarOptionProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout realizado com sucesso!");
  };

  return (
    <div className="sidebar-logout-wrapper">
      <button className="sidebar-logout-button" onClick={handleClick}>
        <span className="sidebar-logout-icon">{icon}</span>
        <span className="sidebar-logout-text">{text}</span>
      </button>
    </div>
  );
};

export default SidebarLogout;
