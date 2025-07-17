import Sidebar from "../../../components/SideBarComponents/Sidebar/Sidebar"
import './GerenciamentoDeAgendamentosRecepcionista.css'
import ActionButton from "@/components/ActionButton/ActionButton";
import DateSelector from "@/components/DateSelector/DateSelector";
import AgendamentosTable from "@/components/Tables/AgendamentosTable/AgendamentosTable/AgendamentosTable";
import { useState } from "react";

const GerenciamentoDeAgendamentosRecepcionista = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    };

    const formatDateForInput = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="agendamentos-recepcionista-container">
            <div className="agendamentos-recepcionista-container__sidebar">
                <Sidebar />
            </div>

            <div className="agendamentos-recepcionista-container__content">
                <div className="agendamentos-recepcionista-container__content__title">
                    Gerenciamento de Agendamentos
                    <div className="agendamentos-recepcionista-container__content__title-line"></div>
                </div>

                <div className="agendamentos-recepcionista-container__content__top">
                    <DateSelector
                        label="Data Inicial"
                        value={formatDateForInput(selectedDate)}
                        onChange={handleDateChange}
                        className="dateselector-container"
                    />
                    <ActionButton text="Realizar Agendamento" className="actionbutton-container"/>
                </div>

                <div className="agendamentos-recepcionista-container__content__table">
                    <AgendamentosTable date={selectedDate} />
                </div>

            </div>
        </div>
    );
};

export default GerenciamentoDeAgendamentosRecepcionista