import type { Usuarios } from "@/types/Usuarios";
import './ProfessionalScheduleTable.css';
import type { HorariosDeAtendimento } from "@/types/HorariosDeAtendimento";
import ProfessionalScheduleRow from "../ProfessionalScheduleRow/ProfessionalScheduleRow";
import IconWithText from "@/components/IconWithText/IconWithText";
import { ReactComponent as ProfessionalIcon } from "@/assets/icons/ProfissionalDaSaude-icon.svg";
import ActionButton from "@/components/ActionButton/ActionButton";
import { useState } from "react";
import CadastrarHorarioAtendimentoForm from "@/components/forms/profissional-da-saude/CadastrarHorarioAtendimentoForm/CadastrarHorarioAtendimentoForm";
import Modal from "@/components/Modal/Modal";

interface ProfessionalScheduleTableProps {
    profissional: Usuarios;
    horariosDeAtendimento: HorariosDeAtendimento[];
}

const ProfessionalScheduleTable = ({ profissional }: ProfessionalScheduleTableProps) => {
    const [showAddModal, setShowAddModal] = useState(false);

    const [prof, setProf] = useState<Usuarios>(profissional);


    const handleSuccess = (profissionalAtualizado: Usuarios) => {
        setProf(profissionalAtualizado);
        setShowAddModal(false);
    };

    const handleDeleted = (idHorario: number) => {
        setProf(prev => ({
            ...prev,
            horarios_atendimento: prev.horarios_atendimento?.filter(h => h.id !== idHorario) ?? [],
        }));
    }

    return (
        <>
            <h3>Gerenciamento de Horários do Profissional de Saúde</h3>
            <div className="cabecalho">
                <IconWithText className="iconWithText-scheduletable" text={profissional.nome} icon={<ProfessionalIcon />} />
                <ActionButton text="Adicionar Horário" className="actionButton-container" onClick={() => setShowAddModal(true)} />
            </div>

            <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
                <CadastrarHorarioAtendimentoForm
                    profissionalID={profissional.id}
                    onClose={() => setShowAddModal(false)}
                    onSuccess={handleSuccess}
                />
            </Modal>

            <div className='tableschedule-container'>
                <div className='tableschedule-container-chapters'>
                    <div className='tableschedule-container-chapters__title'> <span> Dia da Semana </span> </div>
                    <div className='tableschedule-container-chapters__title'> <span> Horário Inicial </span> </div>
                    <div className='tableschedule-container-chapters__title'> <span> Horário Final </span></div>
                    <div className='tableschedule-container-chapters__title'> <span> Ações </span></div>
                </div>

                <div className="tableschedule-container-content">
                    {prof.horarios_atendimento?.map(horario => (
                        <ProfessionalScheduleRow key={horario.id} horario={horario} idProfissional={prof.id} onDeleted={handleDeleted} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProfessionalScheduleTable;
