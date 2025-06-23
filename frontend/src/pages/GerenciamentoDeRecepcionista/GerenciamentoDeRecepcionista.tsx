import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import UserTable from "@/components/Tables/UserTable/UserTable/UserTable";
import './GerenciamentoDeRecepcionista.css'
import { useState, useEffect } from "react";
import { recepcionistaService } from "@/services/recepcionistaService";
import type { Usuarios } from "@/types/Usuarios";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import RecepcionistaProfile from "@/components/UserProfiles/RecepcionistaProfile/RecepcionistaProfile";
import CadastrarRecepcionistaForm from "@/components/forms/recepcionista/CadastrarRecepcionistaForm/CadastrarRecepcionistaForm";
import EditarRecepcionistaForm from "@/components/forms/recepcionista/EditarRecepcionistaForm/EditarRecepcionistaForm";

const GerenciamentoDeRecepcionista = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recepcionistas, setRecepcionistas] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 11;

    const filteredRecepcionistas = recepcionistas.filter((rec) =>
        rec.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredRecepcionistas.length / itemsPerPage);
    const currentItems = filteredRecepcionistas.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [showModal, setShowModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showProfileModal, setShowProfileModal] = useState(false);

    const [selectedRecepcionista, setSelectedRecepcionista] = useState<Usuarios | null>(null);

    const handleProfile = (usuario: Usuarios) => {
        setSelectedRecepcionista(usuario);
        setShowProfileModal(true);
    };

    const handleEdit = (usuario: Usuarios) => {
        setSelectedRecepcionista(usuario);
        setShowEditModal(true);
    }

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

    useEffect(() => {
        fetchRecepcionistas();
    }, []);

    return (
        <div className="recepcionista-container">
            <div className="recepcionista-container__sidebar">
                <Sidebar />
            </div>

            <div className="recepcionista-container__content">

                <div className="recepcionista-container__content__title">
                    Gerenciamento de Usuários
                    <div className="recepcionista-container__content__title-line"></div>
                </div>

                <div className="recepcionista-container__content__top">
                    <SearchBar
                        className="searchbar-container"
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                    <ActionButton text="Adicionar Usuário" className="actionbutton-container" onClick={() => setShowModal(true)} />
                </div>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CadastrarRecepcionistaForm
                        onClose={() => setShowModal(false)}
                        onSuccess={fetchRecepcionistas}
                    />
                </Modal>

                <Modal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)}>
                    {selectedRecepcionista && (
                        <RecepcionistaProfile
                            recepcionista={selectedRecepcionista}
                        />
                    )}
                </Modal>

                <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} >
                    {selectedRecepcionista && (
                        <EditarRecepcionistaForm
                            onClose={() => setShowEditModal(false)}
                            onSuccess={fetchRecepcionistas}
                            recepcionista={selectedRecepcionista}
                        />
                    )}
                </Modal>

                <div className="recepcionista-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <UserTable usuarios={currentItems} className="usertable-container" onEdit={handleEdit} onProfile={handleProfile} />
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