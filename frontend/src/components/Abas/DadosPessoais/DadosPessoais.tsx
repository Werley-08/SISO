import React from 'react';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import IconWithText from '@/components/IconWithText/IconWithText';

import { ReactComponent as UserRoleIcon } from "@/assets/icons/UserRole-icon.svg";
import { ReactComponent as UserStatusIcon } from "@/assets/icons/UserStatus-icon.svg";
import { ReactComponent as PhoneIcon } from "@/assets/icons/Phone-icon.svg";
import { ReactComponent as HomeIcon } from "@/assets/icons/Home-icon.svg";
import { ReactComponent as LocationIcon } from "@/assets/icons/Location-icon.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/Calendar-Icon.svg";
import { ReactComponent as ResponsavelIcon } from "@/assets/icons/Responsavel-icon.svg";
import type { Paciente } from '@/types/Paciente';



interface DadosPessoaisProps {
    paciente: Paciente;
}

const DadosPessoais: React.FC<DadosPessoaisProps> = ({ paciente }) => {

    return (
        <div className="pacienteProfile-tabContent">
            <FormDescriptor label="Informações gerais" />
            <IconWithText
                text={paciente.status || "Status não informado"}
                icon={<UserStatusIcon />}
            />
            <IconWithText
                text={paciente.telefone || "Telefone não informado"}
                icon={<PhoneIcon />}
            />
            <IconWithText
                text={
                    paciente.data_nascimento
                        ? (() => {
                            const [day, month, year] = paciente.data_nascimento.split("/");
                            return new Date(+year, +month - 1, +day).toLocaleDateString("pt-BR");
                        })()
                        : "Data de nascimento não informada"
                }

                icon={<CalendarIcon />}
            />
            <IconWithText
                text={paciente.classificacao_etaria || "Classificação etária não informada"}
                icon={<UserRoleIcon />}
            />

            {paciente.classificacao_etaria?.toUpperCase() === "MENOR" && paciente.responsavel && (
                <>
                    <FormDescriptor label="Responsável" />
                    <IconWithText
                        text={paciente.responsavel.nome || "Nome não informado"}
                        icon={<UserRoleIcon />}
                    />
                    <IconWithText
                        text={paciente.responsavel.telefone || "Telefone não informado"}
                        icon={<PhoneIcon />}
                    />
                    <IconWithText
                        text={paciente.responsavel.parentesco || "Parentesco não informado"}
                        icon={<ResponsavelIcon />}
                    />
                </>
            )}

            <FormDescriptor label="Endereço" />
            <IconWithText
                text={
                    paciente.rua
                        ? `${paciente.rua}, ${paciente.bairro || ""} - ${paciente.num_casa || ""}`
                        : "Endereço não informado"
                }
                icon={<HomeIcon />}
            />
            <IconWithText
                text={paciente.cidade || "Cidade não informada"}
                icon={<LocationIcon />}
            />
        </div>
    );
};

export default DadosPessoais;
