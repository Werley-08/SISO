import './procedimentoTable.css'
import type { Procedimento } from '@/types/Procedimento';
import ProcedimentoTableRow from '../ProcedimentoRow/ProcedimentoTableRow';

interface Props {
    procedimentos: Procedimento[];
    className?: string;
    onEdit?: (procedimento: Procedimento) => void;
}

const ProcedimentoTable = ({ procedimentos, className = "", onEdit }: Props) => {

    return (
        <div className={`procedimentoTable-container ${className}`}>

            <div className='procedimentoTable-container-chapters'>
                <div className='procedimentoTable-container-chapters__title'> <span> Nome </span> </div>
                <div className='procedimentoTable-container-chapters__title'> <span> Preço </span> </div>
                <div className='procedimentoTable-container-chapters__title'> <span> Duração em Sessões </span></div>
                <div className='procedimentoTable-container-chapters__title'> <span> Ações </span></div>
            </div>

            <div className='procedimentoTable-container-content'>
                {procedimentos.map(procedimento => (
                    <ProcedimentoTableRow
                        key={procedimento.id}
                        procedimento={procedimento}
                        className="procedimentoTable-row-container"
                        onEdit={onEdit}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProcedimentoTable