import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import UserTable from "../../components/UserTable/UserTable";
import Pagination from "../../components/Pagination/Pagination";
import './GerenciamentoDeProfissionalDaSaude.css'
import { ProfissionalDaSaudeMock } from "./ProfissionalDaSaudeMock";
import { useState } from "react";

const GerenciamentoDeProfissionalDaSaude = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(ProfissionalDaSaudeMock.length / itemsPerPage);
    const currentItems = ProfissionalDaSaudeMock.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="profissional-container">
            <div className="profissional-container__sidebar">
                <Sidebar />
            </div>

            <div className="profissional-container__content">
                <div className="profissional-container__content__title">
                    Gerenciamento de usuários
                    <div className="profissional-container__content__title-line"></div>
                </div>

                <div className="profissional-container__content__top">
                    <SearchBar className="searchbar-container"/>
                    <ActionButton text="Adicionar Usuário" className="actionbutton-container"/>
                </div>

                <div className="profissional-container__content__table">
                    <UserTable usuarios={currentItems} className="usertable-container"/>
                </div>

                <div className="profissional-container__content__pagination">
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default GerenciamentoDeProfissionalDaSaude