import './ProfissionalProfile.css'
import type { Usuarios } from '@/types/Usuarios';
import Avatar from '@/components/Avatar/Avatar';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import IconWithText from '@/components/IconWithText/IconWithText';
import { ReactComponent as UserRoleIcon } from "@/assets/icons/UserRole-icon.svg"
import { ReactComponent as UserStatusIcon } from "@/assets/icons/UserStatus-icon.svg"
import { ReactComponent as PhoneIcon } from "@/assets/icons/Phone-icon.svg"
import { ReactComponent as HomeIcon } from "@/assets/icons/Home-icon.svg"
import { ReactComponent as LocationIcon } from "@/assets/icons/Location-icon.svg"
import { ReactComponent as ProfissionalIcon } from "@/assets/icons/ProfissionalDaSaude-icon.svg"

interface ProfissionalProfileProps {
  className?: string;
  profissional: Usuarios;
}

const ProfissionalProfile: React.FC<ProfissionalProfileProps> = ({ className, profissional}) => {
    return (
        <div className={`profissionalProfile-container ${className || ''}`}>

            <div className="profissionalProfile-container__title"> 
                <h3> Perfil de usuário </h3>
            </div>

            <div className="profissionalProfile-container__main-content"> 

                <div className="profissionalProfile-container__avatar"> 
                    <Avatar usuario={profissional} className="avatar-container"/>

                    <div className="profissionalProfile-container__avatar-informations">
                        <IconWithText text={profissional.role} icon={<UserRoleIcon/>}   />
                        <IconWithText text={profissional.especialidade?.nome} icon={<ProfissionalIcon/>}   />
                    </div>
                    
                </div>

                <div className="profissionalProfile-container__informations">
                
                    <FormDescriptor label='Informações gerais'/>
                    <IconWithText text={profissional.status} icon={<UserStatusIcon/>}   />
                    <IconWithText text={profissional.telefone} icon={<PhoneIcon/>}   />

                    <FormDescriptor label='Endereço'/>
                    <IconWithText text={profissional.rua + ", " + profissional.bairro + " - " + profissional.numero_casa} icon={<HomeIcon/>}   />
                    <IconWithText text={profissional.cidade} icon={<LocationIcon/>}   />

                </div>
            </div>
        </div>
    );
}

export default ProfissionalProfile;