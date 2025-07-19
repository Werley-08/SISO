import { useState } from "react";
import { tratamentoService } from "@/services/tratamentoService";
import type { Tratamento } from "@/types/Tratamento";
import Button from "@/components/Button/Button";
import "./EditarAnotacaoClinicaForm.css";
import { toast } from "sonner";

interface EditarAnotacaoClinicaFormProps {
    tratamento: Tratamento;
    onClose: () => void;
    onSuccess: () => void;
}

const EditarAnotacaoClinicaForm = ({
    tratamento,
    onClose,
    onSuccess,
}: EditarAnotacaoClinicaFormProps) => {
    const [anotacao, setAnotacao] = useState(tratamento.outras_informacoes || "");

    const salvar = async () => {
        try {
            await tratamentoService.editarAnotacaoClinica(tratamento.id, anotacao);
            onSuccess();
            toast.success("Anotação clínica salva com sucesso!")
        } catch (error) {
            console.error("Erro ao salvar anotação clínica:", error);
        }
    };

    return (
        <div className="editarAnotacaoClinicaForm">
            <h3>Editar Anotação Clínica</h3>
            <textarea
                value={anotacao}
                onChange={(e) => setAnotacao(e.target.value)}
                rows={6}
                placeholder="Digite a anotação clínica"
            />
            <div className="editarAnotacaoClinicaForm-botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" onClick={salvar} />
            </div>
        </div>
    );
};

export default EditarAnotacaoClinicaForm;
