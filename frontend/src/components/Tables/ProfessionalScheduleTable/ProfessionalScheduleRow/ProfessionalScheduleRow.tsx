import type { HorariosDeAtendimento } from "@/types/HorariosDeAtendimento";
import "./ProfessionalScheduleRow.css";
import ActionMenu from "@/components/ActionMenu/ActionMenu";
import { ReactComponent as DeleteIcon } from "@/assets/icons/Delete-icon.svg";
import { useState } from "react";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import { toast } from "sonner";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";

interface ProfessionalScheduleRowProps {
    horario: HorariosDeAtendimento;
    idProfissional: number;
    onDeleted: (idHorario: number) => void;
}

const ProfessionalScheduleRow = ({ horario, idProfissional, onDeleted }: ProfessionalScheduleRowProps) => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const deletar = async () => {
        try {
            await profissionalDaSaudeService.deletarHorarioDeAtendimento(idProfissional, horario.id);
            toast.success("Horário deletado com sucesso!");
            onDeleted(horario.id);
            setShowDeleteConfirm(false);
        } catch (error) {
            toast.error("Erro ao excluir horário!");
            console.error(error);
        }
    }

    return (
        <>
            <div className="scheduletable-row-container">
                <div className="scheduletable-row-container-content">
                    <div className="scheduletable-row-container-content__item">
                        <span>{horario?.dia_semana}</span>
                    </div>
                    <div className="scheduletable-row-container-content__item">
                        <span>{horario?.horario_inicio}</span>
                    </div>
                    <div className="scheduletable-row-container-content__item">
                        <span>{horario?.horario_fim}</span>
                    </div>

                    <div className="scheduletable-row-container-content__item">
                        <ActionMenu
                            className="actionmenu-container"
                            icons={[
                                { icon: <DeleteIcon />, onClick: () => { setShowDeleteConfirm(true) } }
                            ]}
                        />
                    </div>
                </div>
            </div>

            <Modal isOpen={showDeleteConfirm} onClose={() => { setShowDeleteConfirm(false) } }>
                <h4>Remover horário</h4>
                <p>Tem certeza de que deseja excluir este horário de atendimento?</p>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "20px" }}>
                    <Button label="Cancelar" variant="secondary" onClick={() => setShowDeleteConfirm(false)} />
                    <Button label="Excluir" onClick={deletar} />
                </div>
            </Modal>
        </>
    );
}

export default ProfessionalScheduleRow;