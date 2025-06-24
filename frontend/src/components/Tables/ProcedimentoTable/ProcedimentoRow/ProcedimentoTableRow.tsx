import './ProcedimentoTableRow.css'
import type { Procedimento } from '@/types/Procedimento';
import { ReactComponent as PencilIcon } from "@/assets/icons/Pencil-icon.svg"
import ActionMenu from '../../../ActionMenu/ActionMenu';

type Props = {
    className?: string;
    procedimento?: Procedimento;
    onEdit?: (procedimento: Procedimento) => void;
};

const ProcedimentoTableRow = ({ procedimento, className = "", onEdit}: Props) => {

    return (
        <div className={`procedimentoTable-row-container ${className}`}>

            <div className='procedimentoTable-row-container-content'>
                <div className='procedimentoTable-row-container-content__item'> <span> {procedimento?.nome} </span>  </div>
                <div className='procedimentoTable-row-container-content__item'> <span> {procedimento?.preco} </span> </div>
                <div className='procedimentoTable-row-container-content__item'> <span> {procedimento?.duracao_em_sessao} </span> </div>

                <div className='procedimentoTable-row-container-content__item'>
                    <ActionMenu
                        className='actionmenu-container'
                        icons={[
                            { icon: <PencilIcon />, onClick: () => onEdit?.(procedimento!) }
                        ]}
                    />
                </div>
            </div>

        </div>
    );
};

export default ProcedimentoTableRow