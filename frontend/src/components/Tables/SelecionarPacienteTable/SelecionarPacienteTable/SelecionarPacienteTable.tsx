import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelecionarPacienteTable.css";
import { pacienteService } from "@/services/pacienteService";
import type { Paciente } from "@/types/Paciente";
import SelecionarPacienteRow from "../SelecionarPacienteRow/SelecionarPacienteRow";
import SearchBar from "@/components/SearchBar/SearchBar";
import Pagination from "@/components/Pagination/Pagination";

const SelecionarPacienteTable = () => {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const fetchPacientes = useCallback(async () => {
        try {
            const data = await pacienteService.listarPacientes();
            setPacientes(data);
        } catch (error) {
            console.error("Erro ao carregar pacientes: ", error);
        }
    }, []);

    useEffect(() => {
        fetchPacientes();
    }, [fetchPacientes]);

    // Filtragem
    const filteredPacientes = pacientes.filter((pac) =>
        pac.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredPacientes.length / itemsPerPage);
    const currentItems = filteredPacientes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Resetar página ao pesquisar
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const navigate = useNavigate();

    const handleSelectPaciente = (paciente: Paciente) => {
        navigate('/GerenciamentoDePaciente', {
            state: {
                paciente,
                initialTabIndex: 2 // 0: Dados pessoais, 1: Anamnese, 2: Tratamentos
            }
        });
    };

    return (
        <>
            <div className="selecionarPacienteTable-header">
                <h3>Selecione um paciente</h3>
                <SearchBar
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="searchbar-fullwidth"
                />
            </div>
            <div className="selecionarPacienteTable-container">
                <div className="selecionarPacienteTable-chapters">
                    <div className="selecionarPacienteTable-chapters-title"><span>Nome</span></div>
                    <div className="selecionarPacienteTable-chapters-title"><span>Telefone</span></div>
                    <div className="selecionarPacienteTable-chapters-title"><span>Ações</span></div>
                </div>

                {currentItems.map(paciente => (
                    <SelecionarPacienteRow
                        key={paciente.id}
                        paciente={paciente}
                        onSelectPaciente={handleSelectPaciente}
                    />
                ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}

export default SelecionarPacienteTable;