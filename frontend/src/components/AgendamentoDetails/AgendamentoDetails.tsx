import React from 'react';
import './AgendamentoDetails.css';
import type { Sessao } from '@/types/Sessao';
import type { Tratamento } from '@/types/Tratamento';
import Tabs from '@/components/tabs/Tabs';
import PatientAvatar from '@/components/PatientAvatar/PatientAvatar';
import AgendamentoInfo from './Abas/AgendamentoInfo/AgendamentoInfo';
import TratamentoInfo from './Abas/TratamentoInfo/TratamentoInfo';
import PacienteInfo from './Abas/PacienteInfo/PacienteInfo';

interface AgendamentoDetailsProps {
  sessao: Sessao;
  tratamento: Tratamento | null;
}

const AgendamentoDetails: React.FC<AgendamentoDetailsProps> = ({ sessao, tratamento }) => {
  const tabs = [
    {
      rotulo: "Informações do Agendamento",
      conteudo: <AgendamentoInfo sessao={sessao} />,
    },
    {
      rotulo: "Informações do Tratamento",
      conteudo: <TratamentoInfo tratamento={tratamento} />,
    },
    {
      rotulo: "Informações do Paciente",
      conteudo: <PacienteInfo paciente={tratamento?.paciente || null} />,
    },
  ];

  return (
    <div className="agendamentoDetails-container">
      <div className="agendamentoDetails-title">
        Detalhes do Agendamento
        <div className="agendamentoDetails-title-line"></div>
      </div>
      
      <div className="agendamentoDetails-content-wrapper">
        <div className="agendamentoDetails-sidebar">
          {tratamento?.paciente && (
            <PatientAvatar 
              paciente={tratamento.paciente}
              size="large"
              showName={true}
            />
          )}
        </div>

        <div className="agendamentoDetails-content">
          <Tabs abas={tabs} />
        </div>
      </div>
    </div>
  );
};

export default AgendamentoDetails; 