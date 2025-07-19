import React from 'react';
import './AgendamentoInfo.css';
import type { Sessao } from '@/types/Sessao';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import Label from '@/components/Label/Label';

interface AgendamentoInfoProps {
  sessao: Sessao;
}

const AgendamentoInfo: React.FC<AgendamentoInfoProps> = ({ sessao }) => {
  const formatarHorario = (hora: string) => {
    return hora.substring(0, 5);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'realizada':
        return '#10B981';
      case 'pendente':
        return '#F59E0B';
      case 'cancelada':
        return '#EF4444';
      default:
        return '#F59E0B';
    }
  };

  return (
    <div className="agendamentoInfo-container">
      <div className="agendamentoInfo-section">
        <FormDescriptor label="Detalhes da Sessão" />
        <div className="agendamentoInfo-grid">
          <div className="agendamentoInfo-item">
            <label className="agendamentoInfo-item-label">Data:</label>
            <span className="agendamentoInfo-item-value">{sessao.data}</span>
          </div>
          <div className="agendamentoInfo-item">
            <label className="agendamentoInfo-item-label">Horário:</label>
            <span className="agendamentoInfo-item-value">{formatarHorario(sessao.hora_inicio)} - {formatarHorario(sessao.hora_finalizacao)}</span>
          </div>
          <div className="agendamentoInfo-item">
            <label className="agendamentoInfo-item-label">Status:</label>
            <div className="agendamentoInfo-item-value">
              <Label 
                text={sessao.status}
                color={getStatusColor(sessao.status)}
              />
            </div>
          </div>
        </div>
      </div>

      {sessao.outras_informacoes && (
        <div className="agendamentoInfo-section">
          <FormDescriptor label="Observações" />
          <div className="agendamentoInfo-observations">
            <p className="agendamentoInfo-observations-text">{sessao.outras_informacoes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendamentoInfo; 