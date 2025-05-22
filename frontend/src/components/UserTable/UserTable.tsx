import './UserTable.css'
import type { Usuarios } from '../../types/Usuarios';
import UserTableRow from '../UserTableRow/UserTableRow';

interface Props {
    usuarios: Usuarios[];
    className?: string;
}

const UserTable = ({usuarios, className = "" }: Props) => {

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
                    <UserTableRow usuario={usuario} className="usertable-row-container"/>
                ))}
            </div>

        </div>
    );
};

export default UserTable