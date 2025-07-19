import type { Tratamento } from "@/types/Tratamento";
import { ReactComponent as EyeIcon } from "@/assets/icons/Eye-icon.svg";
import { ReactComponent as CadernetaIcon } from "@/assets/icons/Caderneta-icon.svg";
import "./TratamentoCard.css";
import Label from "../Label/Label";

interface TratamentoCardProps {
  tratamento: Tratamento;
}

const TratamentoCard = ({ tratamento }: TratamentoCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'EM_ANDAMENTO':
        return "#3B82F6";
      case 'INTERROMPIDO':
        return "#EF4444";
      case 'FINALIZADO':
        return "#10B981";
    }
  }

  const getStatusName = (status: string) => {
    switch (status) {
      case 'EM_ANDAMENTO':
        return "Em Andamento";
      case 'INTERROMPIDO':
        return "Interrompido";
      case 'FINALIZADO':
        return "Finalizado";
    }
  }

  const formatDate = (date: string | null | undefined) => {
    if (!date) return "—/—/——";
    return date;
  };

  return (
    <div className="tratamentoCard">
      <div className="tratamentoCard-header">
        <h3>{tratamento.procedimento.nome}</h3>
        <Label text={getStatusName(tratamento.status)} color={getStatusColor(tratamento.status)} />
      </div>

      <div className="tratamentoCard-info">
        <p><strong>Profissional:</strong>{tratamento.profissional.nome}</p>
        <p><strong>Data de início:</strong> {formatDate(tratamento.data_inicio)}</p>
        <p><strong>Data de finalização:</strong> {formatDate(tratamento.data_finalizacao)}</p>
        <p><strong>Observações:</strong> {tratamento.outras_informacoes || "Nenhuma observação registrada"}</p>
      </div>

      <div className="tratamentoCard-actions">
        <button title="Ver sessões" className="icon-button">
          <EyeIcon />
        </button>
        <button title="Editar anotação clínica" className="icon-button">
          <CadernetaIcon />
        </button>
      </div>
    </div>
  );
};

export default TratamentoCard;
