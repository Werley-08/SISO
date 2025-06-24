import "./CadastrarProcedimentoForm.css";
import Button from "@/components/Button/Button";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import InputField from "@/components/InputField/InputField";
import { procedimentoService } from "@/services/procedimentoService";
import { useState } from "react";
import { toast } from "sonner";

interface CadastrarProcedimentoFormProps {
    onClose: () => void;
    onSuccess?: () => void;
}

const CadastrarProcedimentoForm = ({ onClose, onSuccess }: CadastrarProcedimentoFormProps) => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        preco: "",
        duracao_em_sessao: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['nome', 'descricao', 'preco', 'duracao_em_sessao'];
        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
        if (missingFields.length > 0) {
            toast.error("Preencha todos os campos obrigatórios");
            return;
        }

        try {
            await procedimentoService.cadastrarProcedimento({
                ...formData,
                preco: parseFloat(formData.preco),
                duracao_em_sessao: parseInt(formData.duracao_em_sessao)
            });

            toast.success("Procedimento cadastrado com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao cadastrar o procedimento");
            console.error("Erro ao cadastrar procedimento:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cadastrar-procedimento-form">
            <h3>Cadastrar Procedimento</h3>
            <FormDescriptor className="form-descriptor" label="Informações do Procedimento" />
            <div className="input-group">
                <InputField
                    label="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite o nome do procedimento..."
                    name="nome"
                    required
                />
                <InputField
                    label="Descrição"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Digite a descrição..."
                    name="descricao"
                    required
                />
            </div>

            <FormDescriptor className="form-descriptor" label="Detalhes do Procedimento" />
            <div className="input-group">
                <InputField
                    label="Preço (R$)"
                    type="number"
                    value={formData.preco}
                    onChange={handleChange}
                    placeholder="Digite o preço..."
                    name="preco"
                    required
                />
                <InputField
                    label="Duração (minutos)"
                    type="number"
                    value={formData.duracao_em_sessao}
                    onChange={handleChange}
                    placeholder="Digite a duração..."
                    name="duracao_em_sessao"
                    required
                />
            </div>

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
};

export default CadastrarProcedimentoForm;
