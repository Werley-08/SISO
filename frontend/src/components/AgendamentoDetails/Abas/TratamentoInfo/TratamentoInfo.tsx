import React from 'react';
import './TratamentoInfo.css';
import type { Tratamento } from '@/types/Tratamento';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import Label from '@/components/Label/Label';

interface TratamentoInfoProps {
  tratamento: Tratamento | null;
}

const TratamentoInfo: React.FC<TratamentoInfoProps> = ({ tratamento }) => {
  if (!tratamento) {
    return (
      <div className="tratamentoInfo-container">
        <div className="tratamentoInfo-loading">
          <p>Carregando informações do tratamento...</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'finalizado':
        return '#10B981'; // Verde - tratamento concluído com sucesso
      case 'interrompido':
        return '#EF4444'; // Vermelho - tratamento cancelado/interrompido
      case 'em_andamento':
        return '#3B82F6'; // Azul - tratamento em progresso
      default:
        return '#6B7280'; // Cinza - status desconhecido
    }
  };

  const formatarStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'finalizado':
        return 'FINALIZADO';
      case 'interrompido':
        return 'INTERROMPIDO';
      case 'em_andamento':
        return 'EM ANDAMENTO';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <div className="tratamentoInfo-container">
      <div className="tratamentoInfo-section">
        <FormDescriptor label="Informações do Tratamento" />
        <div className="tratamentoInfo-grid">
          <div className="tratamentoInfo-item">
            <label className="tratamentoInfo-item-label">Procedimento:</label>
            <span className="tratamentoInfo-item-value">{tratamento.procedimento.nome}</span>
          </div>
          <div className="tratamentoInfo-item">
            <label className="tratamentoInfo-item-label">Data de Início:</label>
            <span className="tratamentoInfo-item-value">{tratamento.data_inicio}</span>
          </div>
          {tratamento.data_finalizacao && (
            <div className="tratamentoInfo-item">
              <label className="tratamentoInfo-item-label">Data de Finalização:</label>
              <span className="tratamentoInfo-item-value">{tratamento.data_finalizacao}</span>
            </div>
          )}
          <div className="tratamentoInfo-item">
            <label className="tratamentoInfo-item-label">Status:</label>
            <div className="tratamentoInfo-item-value">
              <Label 
                text={formatarStatus(tratamento.status)}
                color={getStatusColor(tratamento.status)}
              />
            </div>
          </div>
          <div className="tratamentoInfo-item">
            <label className="tratamentoInfo-item-label">Profissional:</label>
            <span className="tratamentoInfo-item-value">{tratamento.profissional.nome}</span>
          </div>
        </div>
      </div>

      {tratamento.outras_informacoes && (
        <div className="tratamentoInfo-section">
          <FormDescriptor label="Observações do Tratamento" />
          <div className="tratamentoInfo-observations">
            <p className="tratamentoInfo-observations-text">{tratamento.outras_informacoes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TratamentoInfo; 