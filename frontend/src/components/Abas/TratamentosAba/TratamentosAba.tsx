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

interface TratamentosAbaProps {
    paciente: Paciente;
}

const TratamentosAba = ({ paciente }: TratamentosAbaProps) => {
    const role = localStorage.getItem('role');

    const [showModalCadastro, setShowModalCadastro] = useState(false);
    const [listaTratamentos, setListaTratamentos] = useState<Tratamento[]>([]);
    const [tratamentoSelecionado, setTratamentoSelecionado] = useState<Tratamento | null>(null);
    const [tratamentoSessoesSelecionado, setTratamentoSessoesSelecionado] = useState<Tratamento | null>(null);

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
                        tratamento={trat}
                        onEditarAnotacao={() => setTratamentoSelecionado(trat)}
                        onUpdate={fetchTratamentos}
                        onVerSessoes={() => setTratamentoSessoesSelecionado(trat)}
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

        </div>
    );
}

export default TratamentosAba;