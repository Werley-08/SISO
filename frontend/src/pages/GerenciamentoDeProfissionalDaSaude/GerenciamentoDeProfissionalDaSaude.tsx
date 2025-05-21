import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import './GerenciamentoDeProfissionalDaSaude.css'

const GerenciamentoDeProfissionalDaSaude = () => {

    return (
        <div className="profissional-container">
            <div className="profissional-container__sidebar">
                <Sidebar />
            </div>

            <div className="profissional-container__content">

                <div className="profissional-container__content__title">
                    Gerenciamento de Usuários (Profissional da Saúde)
                    <div className="profissional-container__content__title-line"></div>
                </div>

                <div className="profissional-container__content__top">
                    <SearchBar className="searchbar-container"/>
                    <ActionButton text="Adicionar Usuário" className="actionbutton-container"/>
                </div>

                <div className="profissional-container__content__table">

                    
                </div>

            </div>
        </div>
    );
};

export default GerenciamentoDeProfissionalDaSaude