import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDeRecepcionista.css'

const GerenciamentoDeRecepcionista = () => {

    return (
        <div className="recepcionista-container">
            <div className="recepcionista-container__sidebar">
                <Sidebar />
            </div>

            <div className="recepcionista-container__content">

            </div>
        </div>
    );
};

export default GerenciamentoDeRecepcionista