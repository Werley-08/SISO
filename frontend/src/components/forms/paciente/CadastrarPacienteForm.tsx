import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import './CadastrarPacienteForm.css';
import Button from '@/components/Button/Button';
import InputField from '@/components/InputField/InputField';
import { useState } from 'react';
import SelectField from '@/components/SelectField/SelectField';
import { toast } from 'sonner';
import { pacienteService } from '@/services/pacienteService';

interface CadastrarPacienteFormProps {
    onClose: () => void;
    onSuccess?: () => void;
}

const CadastrarPacienteForm = ({ onClose, onSuccess }: CadastrarPacienteFormProps) => {
    const [formData, setFormData] = useState({
        nome: "",
        data_nascimento: "",
        telefone: "",
        rua: "",
        bairro: "",
        cidade: "",
        num_casa: "",
        classificacao_etaria: "",
        responsavel: {
            nome: "",
            telefone: "",
            parentesco: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "classificacao_etaria") {
            setFormData(prev => ({
                ...prev,
                classificacao_etaria: value,
                responsavel: value === "MENOR"
                    ? prev.responsavel
                    : { nome: "", telefone: "", parentesco: "" }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleResponsavelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            responsavel: {
                ...prev.responsavel,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['nome', 'classificacao_etaria'];
        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

        if (missingFields.length > 0) {
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

        const { responsavel, ...baseData } = formData;
        const payload = formData.classificacao_etaria === "MENOR"
            ? { ...baseData, responsavel }
            : baseData;

        try {
            await pacienteService.cadastrarPaciente(payload);
            toast.success("Paciente cadastrado com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao cadastrar o paciente!");
            console.error("Erro ao cadastrar paciente: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='cadastrar-paciente-form'>
            <h3>Cadastrar Paciente</h3>

            <FormDescriptor label={'Informações Gerais'} />
            <div className='input-group'>
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

export default CadastrarPacienteForm;
