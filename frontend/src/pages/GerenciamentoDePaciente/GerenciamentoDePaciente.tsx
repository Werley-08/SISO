import Sidebar from "../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDePaciente.css'
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState, useEffect, useCallback } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import PatientTable from "@/components/Tables/PatientTable/PatientTable/PatientTable";
import Pagination from "@/components/Pagination/Pagination";
import { type Paciente } from "@/types/Paciente";
import { pacienteService } from "@/services/pacienteService"

const GerenciamentoDePaciente = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 11;
    const totalPages = Math.ceil(pacientes.length / itemsPerPage);
    const currentItems = pacientes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    const handleEdit = (paciente: Paciente) => {
        // FALTA IMPLEMENTAR
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
                    <SearchBar className="searchbar-container" />
                    <ActionButton text="Adicionar Paciente" className="actionbutton-container" />
                </div>

                <div className="profissional-container__content__table">
                    {loading ? (
                        <div>Carregando...</div>
                    ) : (
                        <PatientTable pacientes={currentItems} className="patientTable-container" onEdit={handleEdit} onProfile={handleProfile}/>
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

export default GerenciamentoDePaciente