import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDeProcedimento.css'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState, useEffect, useCallback } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import ProcedimentoTable from "@/components/Tables/ProcedimentoTable/ProcedimentoTable/ProcedimentoTable";
import Pagination from "@/components/Pagination/Pagination";
import { type Procedimento } from "@/types/Procedimento";
import { procedimentoService } from "@/services/procedimentoService"
import CadastrarProcedimentoForm from "@/components/forms/Procedimentos/CadastrarProcedimentoForm";
import Modal from "@/components/Modal/Modal";

const GerenciamentoDeProcedimento = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [procedimentos, setprocedimentos] = useState<Procedimento[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemsPerPage = 11;

    const filteredprocedimentos = procedimentos.filter((pac) =>
        pac.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredprocedimentos.length / itemsPerPage);
    const currentItems = filteredprocedimentos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleEdit = (procedimento: Procedimento) => {
        // FALTA IMPLEMENTAR
    };

    const fetchProcedimentos = useCallback(async () => {
        try {
            setLoading(true);
            const data = await procedimentoService.listarProcedimentos();
            setprocedimentos(data);
        } catch (error) {
            console.error('Erro ao carregar procedimentos:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleModalClose = () => {
        setIsModalOpen(false);
        fetchProcedimentos();
    };

    useEffect(() => {
        fetchProcedimentos();
    }, [fetchProcedimentos]);

    return (
        <div className="procedimento-container">
            <div className="procedimento-container__sidebar">
                <Sidebar />
            </div>

            <div className="procedimento-container__content">
                <div className="procedimento-container__content__title">
                    Gerenciamento de procedimentos
                    <div className="procedimento-container__content__title-line"></div>
                </div>

                <div className="procedimento-container__content__top">
                    <SearchBar
                        className="searchbar-container"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                    <ActionButton text="Adicionar procedimento" className="actionbutton-container" onClick={() => setIsModalOpen(true)} />
                </div>

                <div className="procedimento-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <ProcedimentoTable procedimentos={currentItems} className="procedimentoTable-container" onEdit={handleEdit} />
                    )}
                </div>

                <div className="procedimento-container__content__pagination">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                    <CadastrarProcedimentoForm onClose={handleModalClose} />
                </Modal>


            </div>
        </div>
    );
};

export default GerenciamentoDeProcedimento