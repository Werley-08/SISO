import './UserTableRow.css'
import type { Usuarios } from '../../types/Usuarios';
import Label from '../Label/Label';
import { ReactComponent as PencilIcon } from "../../assets/icons/Pencil-icon.svg"
import { ReactComponent as EyeIcon } from "../../assets/icons/Eye-icon.svg"
import ActionMenu from '../ActionMenu/ActionMenu';

type Props = {
    className?: string;
    usuario?: Usuarios;
    onEdit?: (usuario: Usuarios) => void;
};

const UserTableRow = ({ usuario, className = "", onEdit }: Props) => {

    return (
        <div className={`usertable-row-container ${className}`}>

            <div className='usertable-row-container-content'>
                <div className='usertable-row-container-content__item'> <span> {usuario?.nome} </span>  </div>
                <div className='usertable-row-container-content__item'> <span> {usuario?.telefone} </span> </div>
                <div className='usertable-row-container-content__item'> <span>
                    <Label
                        className='label-container'
                        text={usuario?.role}
                        color={usuario?.role == 'RECEPCIONISTA' ? '#F59E0B' : '#2471A3'} />
                </span> </div>
                <div className='usertable-row-container-content__item'> <span> <Label
                    className='label-container'
                    text={usuario?.status}
                    color={usuario?.status == 'ATIVO' ? '#48C9B0' : '#DB0D4B'} />
                </span> </div>
                <div className='usertable-row-container-content__item'>
                    <ActionMenu
                        className='actionmenu-container'
                        icons={[
                            { icon: <EyeIcon /> }, //falta implementar
                            { icon: <PencilIcon />, onClick: () => onEdit?.(usuario!) }
                        ]}
                    />
                </div>
            </div>

        </div>
    );
};

export default UserTableRow