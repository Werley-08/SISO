import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import "./EditarProfissionalForm.css";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import SelectField from "@/components/SelectField/SelectField";
import { toast } from "sonner";
import api from "@/services/api";
import type { Usuarios } from "@/types/Usuarios";
import type { Especialidade } from "@/types/Especialidade";

interface EditarProfissionalFormProps {
  onClose: () => void;
  profissional: Usuarios;
}

const EditarProfissionalForm = ({ onClose, profissional }: EditarProfissionalFormProps) => {
  const [formData, setFormData] = useState<Usuarios>({
    ...profissional,
    senha: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const camposObrigatorios = [
      formData.nome,
      formData.telefone,
      formData.rua,
      formData.status,
      formData.numero_casa,
      formData.bairro,
      formData.cidade
    ];

    if (camposObrigatorios.some((campo) => !campo)) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const dataToSend = {
      id: formData.id,
      nome: formData.nome,
      telefone: formData.telefone,
      rua: formData.rua,
      numero_casa: formData.numero_casa,
      bairro: formData.bairro,
      cidade: formData.cidade,
      status: formData.status,
      ...(formData.senha.trim() && { senha: formData.senha }),
      especialidade: { id: formData.especialidade?.id }
    };

    try {
      await api.put(
        `/profissionalDaSaude/editar/${formData.id}`,
        dataToSend
      );
      toast.success("Profissional atualizado com sucesso!");
      onClose();
    } catch (error) {
      toast.error("Erro ao atualizar o profissional!");
      console.error("Erro ao atualizar profissional:", error);
    }
  };


  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const res = await api.get("/especialidade/visualizarTodos");
        setEspecialidades(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEspecialidades();
  }, []);

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Editar Profissional de Saúde</h3>
        {/* Informações Gerais */}
        <FormDescriptor label="Informações Gerais" />
        <div className="input-group">
          <InputField label="Nome" value={formData.nome} onChange={handleChange} placeholder="Insira o nome..." name="nome" required />
          <InputField label="Telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 0 0000-0000" name="telefone" required />
          <SelectField label="Especialidade" value={formData.especialidade?.id ?? 0} name="especialidade" options={especialidades} onChange={(e) => setFormData({ ...formData, especialidade: { id: Number(e.target.value), nome: "" } })} />
          <SelectField label="Status" value={formData.status} name="status" options={[
            { id: "ATIVO", nome: "ATIVO" },
            { id: "INATIVO", nome: "INATIVO" },
          ]}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })} />

        </div>
        {/* Endereço */}
        <FormDescriptor label="Endereço" />
        <div className="input-group">
          <InputField label="Rua" value={formData.rua} onChange={handleChange} placeholder="Digite a rua..." name="rua" required />
          <InputField label="Número" value={formData.numero_casa} onChange={handleChange} placeholder="1234" name="numero_casa" required />
          <InputField label="Bairro" value={formData.bairro} onChange={handleChange} placeholder="Digite o bairro..." name="bairro" required />
          <InputField label="Cidade" value={formData.cidade} onChange={handleChange} placeholder="Digite a cidade..." name="cidade" required />
        </div>
        {/* Credenciais de Acesso */}
        <FormDescriptor label="Credenciais de Acesso" />
        <div className="input-group">
          <InputField label="Username" value={formData.username} onChange={handleChange} placeholder="Digite o email..." name="username" disabled />
          <InputField label="Senha" type="password" value={formData.senha} onChange={handleChange} placeholder="Digite a nova senha (opcional)" name="senha" />
        </div>
        {/* Botões de Cancelar e Salvar */}
        <div className="botoes">
          <Button label="Cancelar" variant="secondary" onClick={handleCancel} />
          <Button label="Salvar" type="submit" />
        </div>
      </form>
    </>
  );
};

export default EditarProfissionalForm;
