import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDePacientes.css'

const GerenciamentoDePacientes = () => {

    return (
        <div className="main-layout">
            <div className="main-layout__sidebar">
                <Sidebar />
            </div>

            <div className="main-layout__left-panel">

            </div>
        </div>
    );
};

export default GerenciamentoDePacientes