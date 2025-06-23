import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDePaciente.css'

const GerenciamentoDePaciente = () => {

    return (
        <div className="gerenciamentoDePaciente-container">
            <div className="gerenciamentoDePaciente-container__sidebar">
                <Sidebar />
            </div>

            <div className="gerenciamentoDePaciente-container__content">

            </div>
        </div>
    );
};

export default GerenciamentoDePaciente