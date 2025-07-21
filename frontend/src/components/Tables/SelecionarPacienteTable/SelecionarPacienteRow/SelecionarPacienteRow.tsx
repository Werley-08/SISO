import type { Paciente } from "@/types/Paciente";
import "./SelecionarPacienteRow.css";
import { ReactComponent as SelecionarPessoa } from "@/assets/icons/Selecionar-pessoa.svg";
import ActionMenu from "@/components/ActionMenu/ActionMenu";

interface SelecionarPacienteRowProps {
    paciente?: Paciente;
    onSelectPaciente?: (paciente: Paciente) => void;
}

const SelecionarPacienteRow = ({ paciente, onSelectPaciente }: SelecionarPacienteRowProps) => {
    return (
        <div className="selecionarPacienteRow-container">
            <div className="selecionarPacienteRow-container-content">
                <div className="selecionarPacienteRow-item"><span>{paciente?.nome}</span></div>
                <div className="selecionarPacienteRow-item"><span>{paciente?.telefone}</span></div>
                <div className="selecionarPacienteRow-item">
                    <ActionMenu className="selecionarPacienteRow-actionMenu"
                        icons={[
                            { icon: <SelecionarPessoa />, onClick: () => paciente && onSelectPaciente?.(paciente) }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelecionarPacienteRow;