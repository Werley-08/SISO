import Sidebar from "../../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDeAgendamentosProfissional.css'
import SearchBar from "@/components/SearchBar/SearchBar";
import ActionButton from "@/components/ActionButton/ActionButton";

const GerenciamentoDeAgendamentosProfissional = () => {

    return (
        <div className="agendamentos-container">
            <div className="agendamentos-container__sidebar">
                <Sidebar />
            </div>

            <div className="agendamentos-container__content">
                <div className="agendamentos-container__content__title">
                    Gerenciamento de Agendamentos
                    <div className="agendamentos-container__content__title-line"></div>
                </div>

                <div className="agendamentos-container__content__top">
                    <SearchBar className="searchbar-container" />
                    <ActionButton text="Realizar Agendamento" className="actionbutton-container"/>
                </div>

                <div className="agendamentos-container__content__table">

                </div>

                <div className="agendamentos-container__content__pagination">

                </div>

            </div>
        </div>
    );
};

export default GerenciamentoDeAgendamentosProfissional 