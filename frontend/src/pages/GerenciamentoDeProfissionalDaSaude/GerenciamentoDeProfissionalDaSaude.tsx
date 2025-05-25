import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import UserTable from "../../components/UserTable/UserTable";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import './GerenciamentoDeProfissionalDaSaude.css'
import { useState, useEffect } from "react";
import CadastrarProfissionalForm from "@/components/forms/CadastrarProfissionalForm/CadastrarProfissionalForm";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import type { Usuarios } from "@/types/Usuarios";

const GerenciamentoDeProfissionalDaSaude = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [profissionais, setProfissionais] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(profissionais.length / itemsPerPage);
    const currentItems = profissionais.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchProfissionais = async () => {
            try {
                const data = await profissionalDaSaudeService.listarProfissionais();
                setProfissionais(data);
            } catch (error) {
                console.error('Erro ao carregar profissionais:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfissionais();
    }, []);

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
                    <SearchBar className="searchbar-container" />
                    <ActionButton text="Adicionar Usuário" className="actionbutton-container" onClick={() => setShowModal(true)} />
                </div>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CadastrarProfissionalForm onClose={() => setShowModal(false)} />
                </Modal>

                <div className="profissional-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <UserTable usuarios={currentItems} className="usertable-container"/>
                    )}
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