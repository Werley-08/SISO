import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import './GerenciamentoDeRecepcionista.css'

const GerenciamentoDeRecepcionista = () => {

    return (
        <div className="recepcionista-container">
            <div className="recepcionista-container__sidebar">
                <Sidebar/>
            </div>

            <div className="recepcionista-container__content">

                <div className="recepcionista-container__content__title">
                    Gerenciamento de Usuários (Recepcionista)
                    <div className="recepcionista-container__content__title-line"></div>
                </div>

                <div className="recepcionista-container__content__top">
                    <SearchBar className="searchbar-container"/>
                    <ActionButton text="Adicionar Usuário" className="actionbutton-container"/>
                </div>

                <div className="recepcionista-container__content__table">

                    
                </div>

            </div>
        </div>
    );
};

export default GerenciamentoDeRecepcionista