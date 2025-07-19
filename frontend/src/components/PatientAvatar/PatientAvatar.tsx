import './PatientAvatar.css';
import type { Paciente } from '@/types/Paciente';

interface PatientAvatarProps {
  className?: string;
  paciente: Paciente;
  showName?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PatientAvatar: React.FC<PatientAvatarProps> = ({ 
  className = "", 
  paciente, 
  showName = true,
  size = 'medium'
}) => {
    return (
        <div className={`patientAvatar-container patientAvatar-${size} ${className}`}>
            <div className="patientAvatar-circle">
                <div className="patientAvatar-circle-text">
                    {paciente.nome.charAt(0).toUpperCase()}
                </div>
            </div>
            
            {showName && (
                <div className="patientAvatar-name"> 
                    {paciente.nome}
                </div>
            )}
        </div>
    );
}

export default PatientAvatar; 