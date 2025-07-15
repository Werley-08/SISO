import './UserTable.css'
import type { Usuarios } from '../../../../types/Usuarios';
import UserTableRow from '../UserTableRow/UserTableRow';

interface Props {
    usuarios: Usuarios[];
    className?: string;
    onEdit?: (usuario: Usuarios) => void;
    onProfile?: (usuario: Usuarios) => void;
    onSchedule?: (usuario: Usuarios) => void;
}

const UserTable = ({ usuarios, className = "", onEdit, onProfile, onSchedule }: Props) => {

    return (
        <div className={`usertable-container ${className}`}>

            <div className='usertable-container-chapters'>
                <div className='usertable-container-chapters__title'> <span> Nome </span> </div>
                <div className='usertable-container-chapters__title'> <span> Telefone </span> </div>
                <div className='usertable-container-chapters__title'> <span> Tipo de Usuário </span></div>
                <div className='usertable-container-chapters__title'> <span> Status </span> </div>
                <div className='usertable-container-chapters__title'> <span> Ações </span></div>
            </div>

            <div className='usertable-container-content'>
                {usuarios.map(usuario => (
                    <UserTableRow key={usuario.id} usuario={usuario} className="usertable-row-container" onEdit={onEdit} onProfile={onProfile} onSchedule={onSchedule}/>
                ))}
            </div>

        </div>
    );
};

export default UserTable