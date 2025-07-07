import type { HorariosDeAtendimento } from "@/types/HorariosDeAtendimento";
import "./ProfessionalScheduleRow.css";
import ActionMenu from "@/components/ActionMenu/ActionMenu";
import { ReactComponent as DeleteIcon } from "@/assets/icons/Delete-icon.svg";

interface ProfessionalScheduleRowProps {
    horario: HorariosDeAtendimento;
}

const ProfessionalScheduleRow = ({ horario }: ProfessionalScheduleRowProps) => {
    return (
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
                            { icon: <DeleteIcon />, onClick: () => { } }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfessionalScheduleRow;