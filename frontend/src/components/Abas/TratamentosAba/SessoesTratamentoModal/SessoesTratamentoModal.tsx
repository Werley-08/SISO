import type { Tratamento } from "@/types/Tratamento";
import type { Sessao } from "@/types/Sessao";
import { useState } from "react";
import Label from "@/components/Label/Label";
import "./SessoesTratamentoModal.css";
import ActionButton from "@/components/ActionButton/ActionButton";
import CadastrarSessaoForm from "@/components/forms/sessoes/CadastrarSessaoForm/CadastrarSessaoForm";
import Modal from "@/components/Modal/Modal";
import { tratamentoService } from "@/services/tratamentoService";

interface SessoesTratamentoModalProps {
  tratamento: Tratamento;
}

const SessoesTratamentoModal = ({ tratamento }: SessoesTratamentoModalProps) => {
  const [showModalCadastrar, setShowModalCadastrar] = useState(false);
  const [sessoes, setSessoes] = useState(tratamento.sessoes);

  const atualizarSessoes = async () => {
    try {
      const tratamentoAtualizado = await tratamentoService.visualizarTratamentoById(tratamento.id);
      setSessoes(tratamentoAtualizado.sessoes);
    } catch (error) {
      console.error("Erro ao atualizar sessões:", error);
    }
  };

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

  return (
    <div className="sessoesTratamentoModal-content">
      <div className="sessoesTratamentoModal-header">
        <div><strong>Procedimento:</strong> {tratamento.procedimento.nome}</div>
        <div><strong>Profissional:</strong> {tratamento.profissional.nome}</div>
        <div className="sessoesTratamentoModal-statusTratamento"><strong>Status:</strong><Label text={getStatusName(tratamento.status)} color={getStatusColor(tratamento.status)} /></div>
      </div>

      <div className="sessoesTratamentoModal-botaoELista">
        <div className="sessoesTratamentoModal-titulo">Sessões do Tratamento</div>
        <ActionButton text="Agendar Sessão" onClick={() => setShowModalCadastrar(true)} className="sessoesTratamentoModal-actionButton" />
      </div>

      <div className="sessoesTratamentoModal-lista">
        {sessoes.length === 0 ? (
          <div>Nenhuma sessão registrada</div>
        ) : (
          sessoes.map(sessao => (
            <SessaoCard key={sessao.id} sessao={sessao} />
          ))
        )}
      </div>
        <Modal isOpen={showModalCadastrar} onClose={() => setShowModalCadastrar(false)}>
          <CadastrarSessaoForm 
            tratamentoID={tratamento.id} 
            onSuccess={() => {
              atualizarSessoes();
              setShowModalCadastrar(false);
            }} 
            onClose={() => {setShowModalCadastrar(false)}} 
          />
        </Modal>
    </div>
  );
};

function SessaoCard({ sessao }: { sessao: Sessao }) {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'REALIZADA':
        return "#10b981";
      case 'PENDENTE':
        return "#f59e0b";
      case 'CANCELADA':
        return "#EF4444";
    }
  }

  return (
    <div className="sessaoCard">
      <div className="sessaoCard-header">
        <div className="sessaoCard-infos">
          <div><strong>Data:</strong> {sessao.data}</div>
          <div><strong>Início:</strong> {sessao.hora_inicio}</div>
          <div><strong>Fim:</strong> {sessao.hora_finalizacao}</div>
          <div><strong>Observações:</strong> {sessao.outras_informacoes || "—"}</div>
        </div>
        <div className="sessoesTratamentoModal-statusSessao"><Label text={(sessao.status)} color={getStatusColor(sessao.status)} /></div>
      </div>
    </div>
  );
}

export default SessoesTratamentoModal; 