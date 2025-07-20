import Sidebar from "@/components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDeAgendamentos.css'
import ActionButton from "@/components/ActionButton/ActionButton";
import DateSelector from "@/components/DateSelector/DateSelector";
import AgendamentosTable from "@/components/Tables/AgendamentosTable/AgendamentosTable/AgendamentosTable";
import Modal from "@/components/Modal/Modal";
import AgendamentoDetails from "@/components/AgendamentoDetails/AgendamentoDetails";
import { useState } from "react";
import type { Sessao } from "@/types/Sessao";
import type { Tratamento } from "@/types/Tratamento";
import { tratamentoService } from "@/services/tratamentoService";
import SelecionarPacienteTable from "@/components/Tables/SelecionarPacienteTable/SelecionarPacienteTable/SelecionarPacienteTable";

const GerenciamentoDeAgendamentos = () => {

    const role = localStorage.getItem('role') || '';

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPacientes, setModalPacientes] = useState(false);
    const [selectedSessao, setSelectedSessao] = useState<Sessao | null>(null);
    const [selectedTratamento, setSelectedTratamento] = useState<Tratamento | null>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    };

    const formatDateForInput = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    const handleCardClick = async (sessao: Sessao) => {
        setSelectedSessao(sessao);
        setIsModalOpen(true);
        
        try {
            const tratamento = await tratamentoService.visualizarTratamentoById(sessao.id_tratamento);
            setSelectedTratamento(tratamento);
        } catch (error) {
            console.error('Erro ao carregar o tratamento:', error);
            setSelectedTratamento(null);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSessao(null);
        setSelectedTratamento(null);
    };

    return (
        <div className="agendamentos-container">
            <div className="agendamentos-container__sidebar">
                <Sidebar />
            </div>

            <div className="agendamentos-container__content">
                <div className="agendamentos-container__content__title">
                    Gerenciamento de Agendamentos
                    <div className="agendamentos-container__content__title-line"></div>
                </div>

                <div className="agendamentos-container__content__top">
                    <DateSelector
                        label="Data Inicial"
                        value={formatDateForInput(selectedDate)}
                        onChange={handleDateChange}
                        className="dateselector-container"
                    />
                    {role === 'RECEPCIONISTA' && (
                        <ActionButton 
                            text="Realizar Agendamento" 
                            className="actionbutton-container"
                            onClick={() => {setModalPacientes(true)}}
                        />
                    )}
                </div>

                <div className="agendamentos-container__content__table">
                    <AgendamentosTable 
                        date={selectedDate} 
                        onCardClick={handleCardClick}
                    />
                </div>

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {selectedSessao && (
                        <AgendamentoDetails 
                            sessao={selectedSessao} 
                            tratamento={selectedTratamento} 
                        />
                    )}
                </Modal>

                <Modal isOpen={modalPacientes} onClose={() => {setModalPacientes(false)}}>
                    <SelecionarPacienteTable />
                </Modal>
            </div>
        </div>
    );
};

export default GerenciamentoDeAgendamentos