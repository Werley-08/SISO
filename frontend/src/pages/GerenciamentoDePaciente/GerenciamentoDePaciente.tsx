import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDePaciente.css'
import SearchBar from "@/components/SearchBar/SearchBar";
import ActionButton from "@/components/ActionButton/ActionButton";
import Pagination from "@/components/Pagination/Pagination";

const GerenciamentoDePaciente = () => {

    return (
        <div className="paciente-container">
            <div className="paciente-container__sidebar">
                <Sidebar />
            </div>

            <div className="paciente-container__content">
                <div className="paciente-container__content__title">
                    Gerenciamento de paciente
                    <div className="paciente-container__content__title-line"></div>
                </div>

                <div className="paciente-container__content__top">
                    <SearchBar className="searchbar-container" />
                    <ActionButton text="Adicionar Paciente" className="actionbutton-container" />
                </div>

                <div className="profissional-container__content__table">

                </div>

                <div className="profissional-container__content__pagination">
                    {/* <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    /> */}
                </div>

            </div>
        </div>
    );
};

export default GerenciamentoDePaciente