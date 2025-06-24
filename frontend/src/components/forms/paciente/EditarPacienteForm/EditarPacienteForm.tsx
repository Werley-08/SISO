import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import "./EditarPacienteForm.css";
import type { Paciente } from "@/types/Paciente";
import { useState } from "react";
import InputField from "@/components/InputField/InputField";
import SelectField from "@/components/SelectField/SelectField";
import Button from "@/components/Button/Button";
import { toast } from "sonner";
import { pacienteService } from "@/services/pacienteService";

interface EditarPacienteFormProps {
    onClose: () => void;
    paciente: Paciente;
    onSuccess?: () => void;
}

const EditarPacienteForm = ({ onClose, paciente, onSuccess }: EditarPacienteFormProps) => {
    const [formData, setFormData] = useState({
        nome: paciente.nome,
        data_nascimento: paciente.data_nascimento,
        telefone: paciente.telefone,
        rua: paciente.rua,
        bairro: paciente.bairro,
        cidade: paciente.cidade,
        num_casa: paciente.num_casa,
        classificacao_etaria: paciente.classificacao_etaria,
        responsavel: {
            nome: paciente.responsavel?.nome ?? "",
            telefone: paciente.responsavel?.telefone ?? "",
            parentesco: paciente.responsavel?.parentesco ?? ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleResponsavelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            responsavel: {
                ...prev.responsavel,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nome || !formData.classificacao_etaria) {
            toast.error("Preencha todos os campos obrigatórios.");
            return;
        }

        if (formData.classificacao_etaria === "MENOR") {
            const { nome, telefone, parentesco } = formData.responsavel;
            if (!nome || !telefone || !parentesco) {
                toast.error("Preencha todos os dados do responsável legal.");
                return;
            }
        }

        const payload = {
            ...formData,
            id: paciente.id,
            responsavel:
                formData.classificacao_etaria === "MENOR"
                    ? (
                        paciente.responsavel
                            ? {
                                id: paciente.responsavel.id,
                                nome: formData.responsavel.nome,
                                telefone: formData.responsavel.telefone,
                                parentesco: formData.responsavel.parentesco
                            }
                            : {
                                nome: formData.responsavel.nome,
                                telefone: formData.responsavel.telefone,
                                parentesco: formData.responsavel.parentesco
                            }
                    )
                    : undefined
        };

        try {
            await pacienteService.editarPaciente(payload);
            toast.success("Paciente editado com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao editar o paciente!");
            console.error("Erro ao editar paciente: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="editar-paciente-form">
            <h3>Editar Paciente</h3>

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
                    placeholder="(00) 0 0000-0000"
                    name="telefone"
                    required
                />
                <InputField
                    label="Data de Nascimento"
                    value={formData.data_nascimento}
                    onChange={handleChange}
                    placeholder="Insira a data de nascimento..."
                    name="data_nascimento"
                    required
                />
                <SelectField
                    label="Classificação Etária"
                    value={formData.classificacao_etaria}
                    name="classificacao_etaria"
                    options={[
                        { id: "MENOR", nome: "MENOR" },
                        { id: "ADULTO", nome: "ADULTO" },
                    ]}
                    onChange={handleChange}
                />
            </div>

            {formData.classificacao_etaria === "MENOR" && (
                <>
                    <FormDescriptor label="Responsável Legal" />
                    <div className="input-group">
                        <InputField
                            label="Nome do Responsável"
                            value={formData.responsavel.nome}
                            onChange={handleResponsavelChange}
                            placeholder="Insira o nome..."
                            name="nome"
                            required
                        />
                        <InputField
                            label="Telefone do Responsável"
                            value={formData.responsavel.telefone}
                            onChange={handleResponsavelChange}
                            placeholder="(00) 0 0000-0000"
                            name="telefone"
                            required
                        />
                        <InputField
                            label="Parentesco"
                            value={formData.responsavel.parentesco}
                            onChange={handleResponsavelChange}
                            placeholder="Ex: Pai, Mãe, Tio..."
                            name="parentesco"
                            required
                        />
                    </div>
                </>
            )}

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
                    value={formData.num_casa}
                    onChange={handleChange}
                    placeholder="1234"
                    name="num_casa"
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

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
};

export default EditarPacienteForm;
