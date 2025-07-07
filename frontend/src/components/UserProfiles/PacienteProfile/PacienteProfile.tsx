import React from 'react';
import './PacienteProfile.css';
import type { Paciente } from '@/types/Paciente';
import Avatar from '@/components/Avatar/Avatar';
import Tabs from '@/components/tabs/Tabs';
import DadosPessoais from '@/components/Abas/DadosPessoais/DadosPessoais';

interface PacienteProfileProps {
  paciente: Paciente;
}

const PacienteProfile: React.FC<PacienteProfileProps> = ({ paciente }) => {
  const tabs = [
    {
      rotulo: "Dados pessoais",
      conteudo: <DadosPessoais paciente={paciente} />,
    },
    // outras abas aqui
  ];

  return (
    <div className="pacienteProfile-container">
      <div className="pacienteProfile-sidebar">
        <Avatar usuario={paciente} className="avatar-containeer" />
      </div>

      <div className="pacienteProfile-content">
            <Tabs abas={tabs} />
   
      </div>
    </div>
  );
};

export default PacienteProfile;
