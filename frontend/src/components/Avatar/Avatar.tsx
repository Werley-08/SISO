import './Avatar.css'
import type { Usuarios } from '@/types/Usuarios';

interface AvatarProps {
  className?: string;
  profissional: Usuarios;
}

const Avatar: React.FC<AvatarProps> = ({ className, profissional }) => {
    return (
        <div className={`avatar-container ${className || ''}`}>

            <div className="avatar-container__circle">
                <div className="avatar-container__circle-text">
                    {profissional.nome.charAt(0)}
                </div>
            </div>

            <div className="avatar-container__name"> 
                {profissional.nome}
            </div>
            
        </div>
    );
}

export default Avatar;