import ActionButton from "@/components/ActionButton/ActionButton";
import "./TratamentosAba.css";
import { useCallback, useEffect, useState } from "react";
import Modal from "@/components/Modal/Modal";
import CadastrarTratamentoForm from "@/components/forms/tratamentos/CadastrarTratamentoForm/CadastrarTratamentoForm";
import type { Paciente } from "@/types/Paciente";
import { tratamentoService } from "@/services/tratamentoService";
import type { Tratamento } from "@/types/Tratamento";
import TratamentoCard from "@/components/TratamentoCard/TratamentoCard";

interface TratamentosAbaProps {
    paciente: Paciente;
}

const TratamentosAba = ({ paciente }: TratamentosAbaProps) => {
    const [showModalCadastro, setShowModalCadastro] = useState(false);
    const [listaTratamentos, setListaTratamentos] = useState<Tratamento[]>([]);

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
                <ActionButton text="Cadastrar Tratamento" className="tratamentosAba-actionButton" onClick={() => { setShowModalCadastro(true) }} />
            </div>
            <div className="tratamentosAba-lista">
                {listaTratamentos.map(trat => (
                    <TratamentoCard
                        tratamento={trat}
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

        </div>
    );
}

export default TratamentosAba;