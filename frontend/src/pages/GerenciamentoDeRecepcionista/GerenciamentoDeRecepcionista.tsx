import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import UserTable from "@/components/UserTable/UserTable";
import './GerenciamentoDeRecepcionista.css'
import { useState, useEffect } from "react";
import { recepcionistaService } from "@/services/recepcionistaService";
import type { Usuarios } from "@/types/Usuarios";
import Pagination from "../../components/Pagination/Pagination";

const GerenciamentoDeRecepcionista = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recepcionistas, setRecepcionistas] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(recepcionistas.length / itemsPerPage);
    const currentItems = recepcionistas.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        const fetchRecepcionistas = async () => {
            try {
                const data = await recepcionistaService.listarRecepcionistas();
                setRecepcionistas(data);
            } catch (error) {
                console.error('Erro ao carregar recepcionistas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecepcionistas();
    }, []);

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
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <UserTable usuarios={currentItems} className="usertable-container"/>
                    )}
                </div>

                <div className="recepcionista-container__content__pagination">
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

export default GerenciamentoDeRecepcionista