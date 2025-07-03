import './patientTableRow.css'
import type { Paciente } from '@/types/Paciente';
import Label from '../../../Label/Label';
import { ReactComponent as PencilIcon } from "@/assets/icons/Pencil-icon.svg"
import { ReactComponent as EyeIcon } from "@/assets/icons/Eye-icon.svg"
import ActionMenu from '../../../ActionMenu/ActionMenu';

type Props = {
    className?: string;
    paciente?: Paciente;
    onEdit?: (paciente: Paciente) => void;
    onProfile?: (paciente: Paciente) => void;
};

const PatientTableRow = ({ paciente, className = "", onEdit, onProfile}: Props) => {
    const role = localStorage.getItem('role');

    return (
        <div className={`patientTable-row-container ${className}`}>

            <div className='patientTable-row-container-content'>
                <div className='patientTable-row-container-content__item'> <span> {paciente?.nome} </span>  </div>
                <div className='patientTable-row-container-content__item'> <span> {paciente?.telefone} </span> </div>
                <div className='patientTable-row-container-content__item'> 
                    <span>
                        <Label
                            className='label-container'
                            text={paciente?.classificacao_etaria}
                            color={paciente?.classificacao_etaria == 'MENOR' ? '#A78BFA' : '#0F766E'} />
                    </span> 
                </div>
                <div className='patientTable-row-container-content__item'> 
                    <span>
                        <Label
                        className='label-container'
                        text={paciente?.status}
                        color={paciente?.status == 'ATIVO' ? '#48C9B0' : '#DB0D4B'} />
                    </span>
                </div>
                <div className='patientTable-row-container-content__item'>
                    <ActionMenu
                        className='actionmenu-container'
                        icons={[
                            { icon: <EyeIcon />, onClick:() => onProfile?.(paciente!) }, 
                            ...(role === 'RECEPCIONISTA' ? [{ icon: <PencilIcon />, onClick: () => onEdit?.(paciente!) }] : [])
                        ]}
                    />
                </div>
            </div>

        </div>
    );
};

export default PatientTableRow