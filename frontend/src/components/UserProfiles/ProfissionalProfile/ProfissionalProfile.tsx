import './ProfissionalProfile.css'
import type { Usuarios } from '@/types/Usuarios';
import Avatar from '@/components/Avatar/Avatar';

interface ProfissionalProfileProps {
  className?: string;
  onClose: () => void;
  profissional: Usuarios;
}

const ProfissionalProfile: React.FC<ProfissionalProfileProps> = ({ className, profissional, onClose }) => {
    return (
        <div className={`profissionalProfile-container ${className || ''}`}>

            <div className="profissionalProfile-container__title"> 
                <h3> Perfil de usuário </h3>
            </div>

            <div className="profissionalProfile-container__main-content"> 

                <div className="profissionalProfile-container__avatar"> 
                    <Avatar profissional={profissional} className="avatar-container"/>
                </div>

                <div className="profissionalProfile-container__informations">
                
                </div>
                
            </div>
            
        </div>
    );
}

export default ProfissionalProfile;