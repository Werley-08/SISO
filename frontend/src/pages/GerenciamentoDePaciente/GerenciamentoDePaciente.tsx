import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDePaciente.css'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState, useEffect, useCallback } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import PatientTable from "@/components/Tables/PatientTable/PatientTable/PatientTable";
import Pagination from "@/components/Pagination/Pagination";
import { type Paciente } from "@/types/Paciente";
import { pacienteService } from "@/services/pacienteService"
import Modal from "@/components/Modal/Modal";
import CadastrarPacienteForm from "@/components/forms/paciente/CadastrarPacienteForm/CadastrarPacienteForm";
import EditarPacienteForm from "@/components/forms/paciente/EditarPacienteForm/EditarPacienteForm";

const GerenciamentoDePaciente = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPaciente, setSelectedPaciente] = useState<Paciente | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 11;

    const filteredPacientes = pacientes.filter((pac) =>
        pac.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPacientes.length / itemsPerPage);
    const currentItems = filteredPacientes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleEdit = (paciente: Paciente) => {
        setSelectedPaciente(paciente);
        setShowEditModal(true);
    };

    const handleProfile = (paciente: Paciente) => {
        // FALTA IMPLEMENTAR
    };

    const fetchPacientes = useCallback(async () => {
        try {
            setLoading(true);
            const data = await pacienteService.listarPacientes();
            setPacientes(data);
        } catch (error) {
            console.error('Erro ao carregar pacientes:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPacientes();
    }, [fetchPacientes]);

    return (
        <div className="paciente-container">
            <div className="paciente-container__sidebar">
                <Sidebar />
            </div>

            <div className="paciente-container__content">
                <div className="paciente-container__content__title">
                    Gerenciamento de pacientes
                    <div className="paciente-container__content__title-line"></div>
                </div>

                <div className="paciente-container__content__top">
                    <SearchBar
                        className="searchbar-container"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                    <ActionButton text="Adicionar Paciente" className="actionbutton-container" onClick={() => setShowModal(true)} />
                </div>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CadastrarPacienteForm
                        onClose={() => setShowModal(false)}
                        onSuccess={fetchPacientes}
                    />
                </Modal>

                <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
                    {selectedPaciente && (
                        <EditarPacienteForm
                            paciente={selectedPaciente}
                            onClose={() => setShowEditModal(false)}
                            onSuccess={fetchPacientes}
                        />
                    )}
                </Modal>

                <div className="paciente-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <PatientTable pacientes={currentItems} className="patientTable-container" onEdit={handleEdit} onProfile={handleProfile} />
                    )}
                </div>

                <div className="paciente-container__content__pagination">
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

export default GerenciamentoDePaciente