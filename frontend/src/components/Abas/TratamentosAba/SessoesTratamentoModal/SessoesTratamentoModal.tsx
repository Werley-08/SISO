import type { Tratamento } from "@/types/Tratamento";
import type { Sessao } from "@/types/Sessao";
import { useState, useEffect } from "react";
import Label from "@/components/Label/Label";
import "./SessoesTratamentoModal.css";
import ActionButton from "@/components/ActionButton/ActionButton";
import CadastrarSessaoForm from "@/components/forms/sessoes/CadastrarSessaoForm/CadastrarSessaoForm";
import Modal from "@/components/Modal/Modal";
import EditarAnotacaoSessaoForm from "../../../forms/sessoes/EditarAnotacaoSessaoForm/EditarAnotacaoSessaoForm";
import { tratamentoService } from "@/services/tratamentoService";
import { ReactComponent as CadernetaIcon } from "@/assets/icons/Caderneta-icon.svg";
import { ReactComponent as CheckIcon } from "@/assets/icons/Check-icon.svg";
import { ReactComponent as CancelIcon } from "@/assets/icons/Cancel-icon.svg";
import { sessaoService } from "@/services/sessaoService";
import Button from "@/components/Button/Button";
import { toast } from "sonner";

interface SessoesTratamentoModalProps {
  tratamento: Tratamento;
}

const SessoesTratamentoModal = ({ tratamento }: SessoesTratamentoModalProps) => {
  const [showModalCadastrar, setShowModalCadastrar] = useState(false);
  const [sessaoSelecionada, setSessaoSelecionada] = useState<Sessao | null>(null);
  const [showModalConfirmarCancelar, setShowModalConfirmarCancelar] = useState(false);
  const [showModalConfirmarConcluir, setShowModalConfirmarConcluir] = useState(false);
  const [sessaoParaAcao, setSessaoParaAcao] = useState<Sessao | null>(null);
  const [sessoes, setSessoes] = useState(tratamento.sessoes);
  const role = localStorage.getItem('role');

  useEffect(() => {
    const fetchSessoesAtualizadas = async () => {
      try {
        const tratamentoAtualizado = await tratamentoService.visualizarTratamentoById(tratamento.id);
        setSessoes(tratamentoAtualizado.sessoes);
      } catch (error) {
        console.error("Erro ao buscar sessões atualizadas:", error);
      }
    };
    fetchSessoesAtualizadas();
  }, [tratamento.id]);

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
        {role === 'RECEPCIONISTA' && (<ActionButton text="Agendar Sessão" onClick={() => setShowModalCadastrar(true)} className="sessoesTratamentoModal-actionButton" />)}
      </div>

      <div className="sessoesTratamentoModal-lista">
        {sessoes.length === 0 ? (
          <div>Nenhuma sessão registrada</div>
        ) : (
          sessoes.map(sessao => (
            <SessaoCard 
              key={sessao.id} 
              sessao={sessao} 
              onEditarAnotacao={() => setSessaoSelecionada(sessao)}
              onUpdate={atualizarSessoes}
              onCancelar={(sessao) => {
                setSessaoParaAcao(sessao);
                setShowModalConfirmarCancelar(true);
              }}
              onConcluir={(sessao) => {
                setSessaoParaAcao(sessao);
                setShowModalConfirmarConcluir(true);
              }}
            />
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
          onClose={() => { setShowModalCadastrar(false) }}
        />
      </Modal>

      {/* Modal de editar anotação da sessão */}
      <Modal isOpen={!!sessaoSelecionada} onClose={() => setSessaoSelecionada(null)}>
        {sessaoSelecionada && (
          <EditarAnotacaoSessaoForm
            sessao={sessaoSelecionada}
            onClose={() => setSessaoSelecionada(null)}
            onSuccess={() => {
              atualizarSessoes();
              setSessaoSelecionada(null);
            }}
          />
        )}
      </Modal>

      {/* Modal de confirmação para cancelar sessão */}
      <Modal isOpen={showModalConfirmarCancelar} onClose={() => setShowModalConfirmarCancelar(false)}>
        <div className="modal-confirmacao-content">
          <h3>Confirmar Cancelamento</h3>
          <p>Tem certeza que deseja cancelar esta sessão?</p>
        </div>
          <div className="modal-confirmacao-botoes">
            <Button label="Cancelar" variant="secondary" onClick={() => setShowModalConfirmarCancelar(false)} />
            <Button label="Confirmar" onClick={() => {
              if (sessaoParaAcao) {
                sessaoService.cancelarSessao(sessaoParaAcao.id).then(() => {
                  atualizarSessoes();
                  setShowModalConfirmarCancelar(false);
                  setSessaoParaAcao(null);
                  toast.success("Sessão cancelada com sucesso!");
                }).catch((error) => {
                  console.error("Erro ao cancelar sessão:", error);
                  toast.error("Erro ao cancelar sessão!");
                });
              }
            }} />
          </div>
      </Modal>

      {/* Modal de confirmação para concluir sessão */}
      <Modal isOpen={showModalConfirmarConcluir} onClose={() => setShowModalConfirmarConcluir(false)}>
        <div className="modal-confirmacao-content">
          <h3>Confirmar Conclusão</h3>
          <p>Tem certeza que deseja marcar esta sessão como realizada?</p>
        </div>
          <div className="modal-confirmacao-botoes">
            <Button label="Cancelar" variant="secondary" onClick={() => setShowModalConfirmarConcluir(false)} />
            <Button label="Confirmar" onClick={() => {
              if (sessaoParaAcao) {
                sessaoService.concluirSessao(sessaoParaAcao.id).then(() => {
                  atualizarSessoes();
                  setShowModalConfirmarConcluir(false);
                  setSessaoParaAcao(null);
                  toast.success("Sessão marcada como realizada!");
                }).catch((error) => {
                  console.error("Erro ao concluir sessão:", error);
                  toast.error("Erro ao concluir sessão!");
                });
              }
            }} />
          </div>
      </Modal>
    </div>
  );
};

function SessaoCard({ sessao, onEditarAnotacao, onCancelar, onConcluir }: { 
  sessao: Sessao; 
  onEditarAnotacao: () => void; 
  onUpdate: () => void;
  onCancelar: (sessao: Sessao) => void;
  onConcluir: (sessao: Sessao) => void;
}) {

  const role = localStorage.getItem('role');

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
        <div className="sessaoCard-actions">
          {sessao.status === 'PENDENTE' && (
            <>
              <button 
                title="Marcar como realizada" 
                className="icon-button success" 
                onClick={() => onConcluir(sessao)}
              >
                <CheckIcon />
              </button>
              <button 
                title="Cancelar sessão" 
                className="icon-button danger" 
                onClick={() => onCancelar(sessao)}
              >
                <CancelIcon />
              </button>
            </>
          )}
          {role !== 'RECEPCIONISTA' && (
          <button 
            title="Editar anotação da sessão" 
            className="icon-button" 
            onClick={onEditarAnotacao}
          >
            <CadernetaIcon />
          </button>
          )}
        </div>
    </div>
  );
}

export default SessoesTratamentoModal; 