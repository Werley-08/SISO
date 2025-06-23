import './PatientTable.css'
import type { Paciente } from '@/types/Paciente';
import PatientTableRow from '../PatientTableRow/PatientTabelRow'

interface Props {
    pacientes: Paciente[];
    className?: string;
    onEdit?: (paciente: Paciente) => void;
    onProfile?: (paciente: Paciente) => void;
}

const PatientTable = ({ pacientes, className = "", onEdit, onProfile }: Props) => {

    return (
        <div className={`patientTable-container ${className}`}>

            <div className='patientTable-container-chapters'>
                <div className='patientTable-container-chapters__title'> <span> Nome </span> </div>
                <div className='patientTable-container-chapters__title'> <span> Telefone </span> </div>
                <div className='patientTable-container-chapters__title'> <span> Classificação Etária </span></div>
                <div className='patientTable-container-chapters__title'> <span> Status </span> </div>
                <div className='patientTable-container-chapters__title'> <span> Ações </span></div>
            </div>

            <div className='patientTable-container-content'>
                {pacientes.map(paciente => (
                    <PatientTableRow
                        key={paciente.id}
                        paciente={paciente}
                        className="patientTable-row-container"
                        onEdit={onEdit}
                        onProfile={onProfile}
                    />
                ))}
            </div>

        </div>
    );
};

export default PatientTable