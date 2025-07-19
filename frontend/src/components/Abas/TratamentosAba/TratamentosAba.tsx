import ActionButton from "@/components/ActionButton/ActionButton";
import "./TratamentosAba.css";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import CadastrarTratamentoForm from "@/components/forms/tratamentos/CadastrarTratamentoForm/CadastrarTratamentoForm";
import type { Paciente } from "@/types/Paciente";

interface TratamentosAbaProps {
    paciente: Paciente;
}

const TratamentosAba = ({ paciente }: TratamentosAbaProps) => {
    const [showModalCadastro, setShowModalCadastro] = useState(false);

    return (
        <div className="tratamentosAba-content">
            <div className="tratamentosAba-contentTop">
                <div className="tratamentosAba-titulo">Tratamentos</div>
                <ActionButton text="Cadastrar Tratamento" className="tratamentosAba-actionButton" onClick={() => { setShowModalCadastro(true) }} />
            </div>
            <Modal isOpen={showModalCadastro} onClose={() => { setShowModalCadastro(false) }}>
                <CadastrarTratamentoForm paciente={paciente} onSuccess={() => { }} onClose={() => { setShowModalCadastro(false) }} />
            </Modal>
        </div>
    );
}

export default TratamentosAba;