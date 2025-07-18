import React, { useState, useEffect, useCallback } from "react";
import EmptyStateMessage from "@/components/EmptyStateMessage/EmptyStateMessage";
import CadastrarAnamneseForm from "@/components/forms/Anamnese/CadastrarAnamneseForm/CadastrarAnamneseForm";
import Modal from "@/components/Modal/Modal";
import type { Paciente } from "@/types/Paciente";
import { anamneseService } from "@/services/anamneseService";
import msgImage from "@/assets/images/msg.png";

interface AnamneseProps {
  paciente: Paciente;
}

const Anamnese: React.FC<AnamneseProps> = ({ paciente }) => {
  const isRecepcionista =
    localStorage.getItem("role")?.toUpperCase() === "RECEPCIONISTA";

  const [hasAnamnese, setHasAnamnese] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAnamnese = useCallback(async () => {
    try {
      const data = await anamneseService.listarPorPaciente(paciente.id);
      setHasAnamnese(!!data); // se tiver dados, tem anamnese
    } catch (error) {
      console.error("Erro ao buscar anamnese:", error);
    }
  }, [paciente.id]);

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
          {...(!isRecepcionista && {
            buttonText: "Cadastrar Anamnese",
            onButtonClick: () => setIsModalOpen(true),
          })}
        />
      )}

      <Modal
        isOpen={isModalOpen && !isRecepcionista}
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
