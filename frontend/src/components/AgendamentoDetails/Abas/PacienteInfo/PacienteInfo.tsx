import React from 'react';
import './PacienteInfo.css';
import type { Paciente } from '@/types/Paciente';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';

interface PacienteInfoProps {
  paciente: Paciente | null;
}

const PacienteInfo: React.FC<PacienteInfoProps> = ({ paciente }) => {
  if (!paciente) {
    return (
      <div className="pacienteInfo-container">
        <div className="pacienteInfo-loading">
          <p>Carregando informações do paciente...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pacienteInfo-container">
      <div className="pacienteInfo-section">
        <FormDescriptor label="Informações Pessoais" />
        <div className="pacienteInfo-grid">
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Nome:</label>
            <span className="pacienteInfo-item-value">{paciente.nome}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Data de Nascimento:</label>
            <span className="pacienteInfo-item-value">{paciente.data_nascimento}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Telefone:</label>
            <span className="pacienteInfo-item-value">{paciente.telefone}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Classificação Etária:</label>
            <span className="pacienteInfo-item-value">{paciente.classificacao_etaria}</span>
          </div>
        </div>
      </div>

      <div className="pacienteInfo-section">
        <FormDescriptor label="Endereço" />
        <div className="pacienteInfo-grid">
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Rua:</label>
            <span className="pacienteInfo-item-value">{paciente.rua}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Número:</label>
            <span className="pacienteInfo-item-value">{paciente.num_casa}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Bairro:</label>
            <span className="pacienteInfo-item-value">{paciente.bairro}</span>
          </div>
          <div className="pacienteInfo-item">
            <label className="pacienteInfo-item-label">Cidade:</label>
            <span className="pacienteInfo-item-value">{paciente.cidade}</span>
          </div>
        </div>
      </div>

      {paciente.responsavel && (
        <div className="pacienteInfo-section">
          <FormDescriptor label="Informações do Responsável" />
          <div className="pacienteInfo-grid">
            <div className="pacienteInfo-item">
              <label className="pacienteInfo-item-label">Nome do Responsável:</label>
              <span className="pacienteInfo-item-value">{paciente.responsavel.nome}</span>
            </div>
            <div className="pacienteInfo-item">
              <label className="pacienteInfo-item-label">Telefone:</label>
              <span className="pacienteInfo-item-value">{paciente.responsavel.telefone}</span>
            </div>
            <div className="pacienteInfo-item">
              <label className="pacienteInfo-item-label">Parentesco:</label>
              <span className="pacienteInfo-item-value">{paciente.responsavel.parentesco}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacienteInfo; 