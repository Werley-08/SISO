import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import './GerenciamentoDePacientes.css'

const GerenciamentoDePacientes = () => {

    return (
        <div className="paciente-container">
            <div className="paciente-container__sidebar">
                <Sidebar />
            </div>
            <div className="paciente-container__content">

                <div className="paciente-container__content__title">
                    Gerenciamento de Pacientes 
                    <div className="paciente-container__content__title-line"></div>
                </div>

                <div className="paciente-container__content__top">
                    <SearchBar className="searchbar-container" />
                    <ActionButton text="Adicionar Paciente" className="actionbutton-container" />
                </div>

                <div className="paciente-container__content__table">


                </div>


            </div>
        </div>
    );
};

export default GerenciamentoDePacientes