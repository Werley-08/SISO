import "./CadastrarRecepcionistaForm.css";
import Button from "@/components/Button/Button";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import InputField from "@/components/InputField/InputField";
import { recepcionistaService } from "@/services/recepcionistaService";
import { useState } from "react";
import { toast } from "sonner";

interface CadastrarRecepcionistaFormProps {
    onClose: () => void;
    onSuccess?: () => void;
}

const CadastrarRecepcionistaForm = ({ onClose, onSuccess }: CadastrarRecepcionistaFormProps) => {
    const [formData, setFormData] = useState({
        nome: "",
        username: "",
        senha: "",
        telefone: "",
        rua: "",
        bairro: "",
        cidade: "",
        numero_casa: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['nome', 'username', 'senha'];
        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
        if (missingFields.length > 0) {
            toast.error("Preencha todos os campos obrigatórios");
            return;
        }

        try {
            await recepcionistaService.cadastrarRecepcionista({
                ...formData
            });

            toast.success("Recepcionista cadastrado com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao cadastrar o recepcionista:");
            console.error("Erro ao cadastrar recepcionista:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cadastrar-recepcionista-form">
            <h3>Cadastrar Recepcionista</h3>
            <FormDescriptor className="form-descriptor" label="Informações Gerais" />
            <div className="input-group">
                <InputField
                    label="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Insira o nome..."
                    name="nome"
                    required
                />
                <InputField
                    label="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Insira o telefone..."
                    name="telefone"
                    required
                />
            </div>

            <FormDescriptor className="form-descriptor" label="Endereço" />
            <div className="input-group">
                <InputField
                    label="Rua"
                    value={formData.rua}
                    onChange={handleChange}
                    placeholder="Digite a rua..."
                    name="rua"
                />
                <InputField
                    label="Número"
                    value={formData.numero_casa}
                    onChange={handleChange}
                    placeholder="1234"
                    name="numero_casa"
                />
                <InputField
                    label="Bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    placeholder="Digite o bairro..."
                    name="bairro"
                />
                <InputField
                    label="Cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Digite a cidade..."
                    name="cidade"
                />
            </div>

            <FormDescriptor className="form-descriptor" label="Credenciais de Acesso" />
            <div className="input-group">
                <InputField
                    label="Username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Digite o email..."
                    name="username"
                    required
                />
                <InputField
                    label="Senha"
                    type="password"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite a senha..."
                    name="senha"
                    required
                />
            </div>

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
}

export default CadastrarRecepcionistaForm;