import React, { useState, useEffect, useCallback } from "react";
import EmptyStateMessage from "@/components/EmptyStateMessage/EmptyStateMessage";
import CadastrarAnamneseForm from "@/components/forms/Anamnese/CadastrarAnamneseForm/CadastrarAnamneseForm";
import Modal from "@/components/Modal/Modal";
import type { Paciente } from "@/types/Paciente";
import { anamneseService } from "@/services/anamneseService";
import msgImage from "@/assets/images/msg.png";
import type { Anamnese } from "@/types/Anamnese";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import "./Anamnese.css"

interface AnamneseProps {
  paciente: Paciente;
}

const Anamnese: React.FC<AnamneseProps> = ({ paciente }) => {
  
  const role = localStorage.getItem('role') || '';

  const [hasAnamnese, setHasAnamnese] = useState(false);
  const [anamnese, setAnamnese] = useState<Anamnese | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAnamnese = useCallback(async () => {
    try {
      const data = await anamneseService.visualizarAnamnese(paciente.id);
      if (data != null) { setHasAnamnese(true); setAnamnese(data); }
    } catch (error) {
      console.error("Erro ao buscar anamnese:", error);
    }
  }, []);

  useEffect(() => {
    fetchAnamnese();
  }, [fetchAnamnese]);

  const handleSuccess = () => {
    fetchAnamnese();
    setIsModalOpen(false);
  };

  return (
    <div className="pacienteProfile-tabContent">
      {!hasAnamnese && (
        <EmptyStateMessage
          title="Nenhuma anamnese cadastrada"
          description="Cadastre uma anamnese para acompanhar o histórico de saúde deste paciente."
          imageSrc={msgImage}
          {... role === 'RECEPCIONISTA' && ({
            buttonText: "Cadastrar Anamnese",
            onButtonClick: () => setIsModalOpen(true),
          })}
        />
      )}

      {hasAnamnese && anamnese && (
        <div className="anamneseInfo-container">
          <div className="anamneseInfo-section">
            <div className="dadosPessoais-formDescriptor-wrapper">
              <FormDescriptor label="Informações de Anamnese" />
            </div>
            <div className="anamneseInfo-grid">
              <div className="anamneseInfo-item">
                <label className="anamneseInfo-item-label">Peso (kg):</label>
                <span className="anamneseInfo-item-value">{anamnese.peso}</span>
              </div>
              <div className="anamneseInfo-item">
                <label className="anamneseInfo-item-label">Altura (cm):</label>
                <span className="anamneseInfo-item-value">{anamnese.altura}</span>
              </div>
              <div className="anamneseInfo-item">
                <label className="anamneseInfo-item-label">Alergias:</label>
                <span className="anamneseInfo-item-value">{anamnese.alergias || 'Nenhuma'}</span>
              </div>
              <div className="anamneseInfo-item">
                <label className="anamneseInfo-item-label">Usa medicamentos?</label>
                <span className="anamneseInfo-item-value">{anamnese.medicamentos ? 'Sim' : 'Não'}</span>
              </div>
              <div className="anamneseInfo-item">
                <label className="anamneseInfo-item-label">Possui doença crônica?</label>
                <span className="anamneseInfo-item-value">{anamnese.doencasCronica ? 'Sim' : 'Não'}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <CadastrarAnamneseForm
          idPaciente={paciente.id}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
        />
      </Modal>
    </div>
  );
};

export default Anamnese;