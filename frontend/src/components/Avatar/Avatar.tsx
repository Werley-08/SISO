import './Avatar.css'
import type { Usuarios } from '@/types/Usuarios';

interface AvatarProps {
  className?: string;
  usuario: Usuarios;
}

const Avatar: React.FC<AvatarProps> = ({ className, usuario }) => {
    return (
        <div className={`avatar-container ${className || ''}`}>

            <div className="avatar-container__circle">
                <div className="avatar-container__circle-text">
                    {usuario.nome.charAt(0)}
                </div>
            </div>

            <div className="avatar-container__name"> 
                {usuario.nome}
            </div>
            
        </div>
    );
}

export default Avatar;