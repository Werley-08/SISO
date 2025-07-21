import ActionButton from "@/components/ActionButton/ActionButton";
import "./TratamentosAba.css";
import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import CadastrarTratamentoForm from "@/components/forms/tratamentos/CadastrarTratamentoForm/CadastrarTratamentoForm";
import type { Paciente } from "@/types/Paciente";
import { tratamentoService } from "@/services/tratamentoService";
import type { Tratamento } from "@/types/Tratamento";
import TratamentoCard from "@/components/TratamentoCard/TratamentoCard";
import EditarAnotacaoClinicaForm from "@/components/forms/tratamentos/EditarAnotacaoClinicaForm/EditarAnotacaoClinicaForm";
import SessoesTratamentoModal from "./SessoesTratamentoModal/SessoesTratamentoModal";
import Button from "@/components/Button/Button";
import { toast } from "sonner";

interface TratamentosAbaProps {
    paciente: Paciente;
}

const TratamentosAba = ({ paciente }: TratamentosAbaProps) => {
    const role = localStorage.getItem('role');

    const [showModalCadastro, setShowModalCadastro] = useState(false);
    const [listaTratamentos, setListaTratamentos] = useState<Tratamento[]>([]);
    const [tratamentoSelecionado, setTratamentoSelecionado] = useState<Tratamento | null>(null);
    const [tratamentoSessoesSelecionado, setTratamentoSessoesSelecionado] = useState<Tratamento | null>(null);
    const [showModalFinalizar, setShowModalFinalizar] = useState(false);
    const [showModalInterromper, setShowModalInterromper] = useState(false);
    const [tratamentoParaAcao, setTratamentoParaAcao] = useState<Tratamento | null>(null);

    const fetchTratamentos = useCallback(async () => {
        try {
            const data = await tratamentoService.listarTratamentos(paciente.id);
            setListaTratamentos(data);
        } catch (error) {
            console.error("Erro ao carregar tratamentos: ", error);
        }
    }, [paciente.id]);

    useEffect(() => {
        fetchTratamentos();
    }, [fetchTratamentos]);



    return (
        <div className="tratamentosAba-content">
            <div className="tratamentosAba-contentTop">
                <div className="tratamentosAba-titulo">Tratamentos</div>
                {role === 'RECEPCIONISTA' && (<ActionButton text="Cadastrar Tratamento" className="tratamentosAba-actionButton" onClick={() => { setShowModalCadastro(true) }} />)}
            </div>
            <div className="tratamentosAba-lista">
                {listaTratamentos.map(trat => (
                    <TratamentoCard
                        key={trat.id}
                        tratamento={trat}
                        onEditarAnotacao={() => setTratamentoSelecionado(trat)}
                        onUpdate={fetchTratamentos}
                        onVerSessoes={() => setTratamentoSessoesSelecionado(trat)}
                        onFinalizar={(tratamento) => {
                            setTratamentoParaAcao(tratamento);
                            setShowModalFinalizar(true);
                        }}
                        onInterromper={(tratamento) => {
                            setTratamentoParaAcao(tratamento);
                            setShowModalInterromper(true);
                        }}
                    />
                ))}
            </div>
            <Modal isOpen={showModalCadastro} onClose={() => setShowModalCadastro(false)}>
                <CadastrarTratamentoForm
                    paciente={paciente}
                    onClose={() => setShowModalCadastro(false)}
                    onSuccess={() => {
                        fetchTratamentos();
                        setShowModalCadastro(false);
                    }}
                />
            </Modal>

            <Modal isOpen={!!tratamentoSelecionado} onClose={() => setTratamentoSelecionado(null)}>
                {tratamentoSelecionado && (
                    <EditarAnotacaoClinicaForm
                        tratamento={tratamentoSelecionado}
                        onClose={() => setTratamentoSelecionado(null)}
                        onSuccess={() => {
                            fetchTratamentos();
                            setTratamentoSelecionado(null);
                        }}
                    />
                )}
            </Modal>

            {/* Modal de sessões do tratamento */}
            <Modal isOpen={!!tratamentoSessoesSelecionado} onClose={() => setTratamentoSessoesSelecionado(null)}>
                {tratamentoSessoesSelecionado && (
                    <SessoesTratamentoModal
                        tratamento={tratamentoSessoesSelecionado}
                    />
                )}
            </Modal>

            {/* Modal de confirmação para finalizar tratamento */}
            <Modal isOpen={showModalFinalizar} onClose={() => setShowModalFinalizar(false)}>
                <div className="modal-confirmacao-content">
                    <h3>Confirmar Finalização</h3>
                    <p>Tem certeza que deseja finalizar este tratamento?</p>
                </div>
                <div className="modal-confirmacao-botoes">
                    <Button label="Cancelar" variant="secondary" onClick={() => setShowModalFinalizar(false)} />
                    <Button label="Confirmar" onClick={() => {
                        if (tratamentoParaAcao) {
                            tratamentoService.finalizarTratamento(tratamentoParaAcao.id).then(() => {
                                fetchTratamentos();
                                setShowModalFinalizar(false);
                                setTratamentoParaAcao(null);
                                toast.success("Tratamento finalizado com sucesso!");
                            }).catch((error) => {
                                console.error("Erro ao finalizar tratamento:", error);
                                toast.error("Erro ao finalizar tratamento!");
                            });
                        }
                    }} />
                </div>
            </Modal>

            {/* Modal de confirmação para interromper tratamento */}
            <Modal isOpen={showModalInterromper} onClose={() => setShowModalInterromper(false)}>
                <div className="modal-confirmacao-content">
                    <h3>Confirmar Interrupção</h3>
                    <p>Tem certeza que deseja interromper este tratamento?</p>
                </div>
                <div className="modal-confirmacao-botoes">
                    <Button label="Cancelar" variant="secondary" onClick={() => setShowModalInterromper(false)} />
                    <Button label="Confirmar" onClick={() => {
                        if (tratamentoParaAcao) {
                            tratamentoService.interromperTratamento(tratamentoParaAcao.id).then(() => {
                                fetchTratamentos();
                                setShowModalInterromper(false);
                                setTratamentoParaAcao(null);
                                toast.success("Tratamento interrompido com sucesso!");
                            }).catch((error) => {
                                console.error("Erro ao interromper tratamento:", error);
                                toast.error("Erro ao interromper tratamento!");
                            });
                        }
                    }} />
                </div>
            </Modal>

        </div>
    );
}

export default TratamentosAba;