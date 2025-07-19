import React from 'react';
import './PacienteProfile.css';
import type { Paciente } from '@/types/Paciente';
import Tabs from '@/components/tabs/Tabs';
import DadosPessoais from '@/components/Abas/DadosPessoais/DadosPessoais';
import Anamnese from '@/components/Abas/AnamneseAba/Anamnese';
import TratamentosAba from '@/components/Abas/TratamentosAba/TratamentosAba';
import PatientAvatar from '@/components/PatientAvatar/PatientAvatar';

interface PacienteProfileProps {
  paciente: Paciente;
}

const PacienteProfile: React.FC<PacienteProfileProps> = ({ paciente }) => {
  const tabs = [
    {
      rotulo: "Dados pessoais",
      conteudo: <DadosPessoais paciente={paciente} />,
    },
    {
      rotulo: "Anamnese",
      conteudo: <Anamnese paciente={paciente} />,
    },
    {
      rotulo: "Tratamentos",
      conteudo: <TratamentosAba paciente={paciente} />
    }
  ];

  return (
    <div className="pacienteProfile-container">
      <div className="pacienteProfile-sidebar">
        <PatientAvatar paciente={paciente} className="avatar-containeer" />
      </div>

      <div className="pacienteProfile-content">
        <Tabs abas={tabs} />

      </div>
    </div>
  );
};

export default PacienteProfile;
