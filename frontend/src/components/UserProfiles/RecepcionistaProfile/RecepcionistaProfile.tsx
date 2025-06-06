import './RecepcionistaProfile.css'
import type { Usuarios } from '@/types/Usuarios';
import Avatar from '@/components/Avatar/Avatar';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import IconWithText from '@/components/IconWithText/IconWithText';
import { ReactComponent as UserRoleIcon } from "@/assets/icons/UserRole-icon.svg"
import { ReactComponent as UserStatusIcon } from "@/assets/icons/UserStatus-icon.svg"
import { ReactComponent as PhoneIcon } from "@/assets/icons/Phone-icon.svg"
import { ReactComponent as HomeIcon } from "@/assets/icons/Home-icon.svg"
import { ReactComponent as LocationIcon } from "@/assets/icons/Location-icon.svg"

interface RecepcionistaProfileProps {
  className?: string;
  recepcionista: Usuarios;
}

const RecepcionistaProfile: React.FC<RecepcionistaProfileProps> = ({ className, recepcionista}) => {
    return (
        <div className={`recepcionistaProfile-container ${className || ''}`}>

            <div className="recepcionistaProfile-container__title"> 
                <h3> Perfil de usuário </h3>
            </div>

            <div className="recepcionistaProfile-container__main-content"> 

                <div className="recepcionistaProfile-container__avatar"> 
                    <Avatar usuario={recepcionista} className="avatar-container"/>
                    <IconWithText text={recepcionista.role} icon={<UserRoleIcon/>}   />
                </div>

                <div className="recepcionistaProfile-container__informations">
                
                    <FormDescriptor label='Informações gerais'/>
                    <IconWithText text={recepcionista.status} icon={<UserStatusIcon/>}   />
                    <IconWithText text={recepcionista.telefone} icon={<PhoneIcon/>}   />

                    <FormDescriptor label='Endereço'/>
                    <IconWithText text={recepcionista.rua + ", " + recepcionista.bairro + " - " + recepcionista.numero_casa} icon={<HomeIcon/>}   />
                    <IconWithText text={recepcionista.cidade} icon={<LocationIcon/>}   />

                </div>
            </div>
        </div>
    );
}

export default RecepcionistaProfile;