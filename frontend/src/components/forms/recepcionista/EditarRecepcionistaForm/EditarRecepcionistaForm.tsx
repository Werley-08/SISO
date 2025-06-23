import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import './EditarRecepcionistaForm.css';
import InputField from '@/components/InputField/InputField';
import React, { useState } from 'react';
import type { Usuarios } from '@/types/Usuarios';
import { toast } from 'sonner';
import SelectField from '@/components/SelectField/SelectField';
import { recepcionistaService } from '@/services/recepcionistaService';
import Button from '@/components/Button/Button';

interface EditarRecepcionistaFormProps {
    onClose: () => void;
    onSuccess?: () => void;
    recepcionista: Usuarios;
}

const EditarRecepcionistaForm = ({ onClose, onSuccess, recepcionista }: EditarRecepcionistaFormProps) => {
    const [formData, setFormData] = useState<Usuarios>({
        ...recepcionista,
        senha: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['nome', 'telefone', 'rua', 'status', 'numero_casa', 'bairro', 'cidade'];
        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

        if (missingFields.length > 0) {
            toast.error("Preencha todos os campos obrigatórios.");
            return;
        }

        try {
            await recepcionistaService.editarRecepcionista(formData.id, formData);
            toast.success("Recepcionista atualizado com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao atualizar o profissional!");
            console.error("Erro ao atualizar o recepcionista: ", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className='editar-profissional-form'>
            <h3>Editar Recepcionista</h3>

            <FormDescriptor className='form-descriptor' label='Informações Gerais' />
            <div className='input-group'>
                <InputField
                    label='Nome'
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder='Insira o nome...'
                    name='nome'
                    required
                />
                <InputField
                    label='Telefone'
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder='(00) 0000-0000'
                    name='telefone'
                    required
                />
                <SelectField
                    label='Status'
                    value={formData.status}
                    name='status'
                    options={[
                        { id: "ATIVO", nome: "ATIVO" },
                        { id: "INATIVO", nome: "INATIVO" },
                    ]}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, status: e.target.value }))
                    }
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
                    required
                />
                <InputField
                    label="Número"
                    value={formData.numero_casa}
                    onChange={handleChange}
                    placeholder="1234"
                    name="numero_casa"
                    required
                />
                <InputField
                    label="Bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    placeholder="Digite o bairro..."
                    name="bairro"
                    required
                />
                <InputField
                    label="Cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Digite a cidade..."
                    name="cidade"
                    required
                />
            </div>
            <FormDescriptor className='form-descriptor' label='Credenciais de Acesso' />
            <div className='input-group'>
                <InputField
                    label='Username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Digite o username...'
                    name="username"
                    disabled
                />
                <InputField
                    label="Senha"
                    type="password"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite a nova senha (opcional)"
                    name="senha"
                />
            </div>

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
}

export default EditarRecepcionistaForm;