import { useState } from "react";
import { sessaoService } from "@/services/sessaoService";
import type { Sessao } from "@/types/Sessao";
import Button from "@/components/Button/Button";
import "./EditarAnotacaoSessaoForm.css";
import { toast } from "sonner";

interface EditarAnotacaoSessaoFormProps {
    sessao: Sessao;
    onClose: () => void;
    onSuccess: () => void;
}

const EditarAnotacaoSessaoForm = ({
    sessao,
    onClose,
    onSuccess,
}: EditarAnotacaoSessaoFormProps) => {
    const [anotacao, setAnotacao] = useState(sessao.outras_informacoes || "");

    const salvar = async () => {
        try {
            await sessaoService.editarAnotacaoSessao(sessao.id, anotacao);
            onSuccess();
            toast.success("Anotação da sessão salva com sucesso!")
        } catch (error) {
            console.error("Erro ao salvar anotação da sessão:", error);
            toast.error("Erro ao salvar anotação da sessão");
        }
    };

    return (
        <div className="editarAnotacaoSessaoForm">
            <h3>Editar Anotação da Sessão</h3>
            <textarea
                value={anotacao}
                onChange={(e) => setAnotacao(e.target.value)}
                rows={6}
                placeholder="Digite a anotação da sessão"
            />
            <div className="editarAnotacaoSessaoForm-botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" onClick={salvar} />
            </div>
        </div>
    );
};

export default EditarAnotacaoSessaoForm; 