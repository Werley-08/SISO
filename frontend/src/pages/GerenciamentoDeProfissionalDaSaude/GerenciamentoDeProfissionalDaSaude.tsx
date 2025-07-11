import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import SearchBar from "../../components/SearchBar/SearchBar";
import ActionButton from "../../components/ActionButton/ActionButton";
import UserTable from "../../components/Tables/UserTable/UserTable/UserTable";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/Modal/Modal";
import './GerenciamentoDeProfissionalDaSaude.css'
import { useState, useEffect, useCallback } from "react";
import CadastrarProfissionalForm from "@/components/forms/profissional-da-saude/CadastrarProfissionalForm/CadastrarProfissionalForm";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import type { Usuarios } from "@/types/Usuarios";
import EditarProfissionalForm from "@/components/forms/profissional-da-saude/EditarProfissionalForm/EditarProfissionalForm";
import ProfissionalProfile from "@/components/UserProfiles/ProfissionalProfile/ProfissionalProfile";

const GerenciamentoDeProfissionalDaSaude = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [profissionais, setProfissionais] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 11;

    // Filtro local de busca
    const filteredProfissionais = profissionais.filter((prof) =>
        prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (prof.especialidade && prof.especialidade.nome.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredProfissionais.length / itemsPerPage);
    const currentItems = filteredProfissionais.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const [selectedProfissional, setSelectedProfissional] = useState<Usuarios | null>(null);

    const handleEdit = (usuario: Usuarios) => {
        setSelectedProfissional(usuario);
        setShowEditModal(true);
    };

    const handleProfile = (usuario: Usuarios) => {
        setSelectedProfissional(usuario);
        setShowProfileModal(true);
    };

    const fetchProfissionais = useCallback(async () => {
        try {
            setLoading(true);
            const data = await profissionalDaSaudeService.listarProfissionais();
            setProfissionais(data);
        } catch (error) {
            console.error('Erro ao carregar profissionais:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProfissionais();
    }, [fetchProfissionais]);

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
                    <CadastrarProfissionalForm 
                        onClose={() => setShowModal(false)} 
                        onSuccess={fetchProfissionais}
                    />
                </Modal>

                <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
                    {selectedProfissional && (
                        <EditarProfissionalForm
                            profissional={selectedProfissional}
                            onClose={() => setShowEditModal(false)}
                            onSuccess={fetchProfissionais}
                        />
                    )}
                </Modal>

                <Modal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)}>
                    {selectedProfissional && (
                        <ProfissionalProfile
                            profissional={selectedProfissional} 
                        />
                    )}
                </Modal>

                <div className="profissional-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <UserTable usuarios={currentItems} className="usertable-container" onEdit={handleEdit} onProfile={handleProfile}/>
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