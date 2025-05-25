import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import "./CadastrarProfissionalForm.css";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import SelectField from "@/components/SelectField/SelectField";
import type { Especialidade } from "@/types/Especialidade";
import { toast } from "sonner";
import api from "@/services/api";

interface CadastrarProfissionalFormProps {
  onClose: () => void;
}

const CadastrarProfissionalForm = ({ onClose }: CadastrarProfissionalFormProps) => {
  const initialFormData = { 
    nome: "", telefone: "", rua: "", numero_casa: "", bairro: "", 
    cidade: "", username: "", senha: "", especialidadeId: "" 
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.username || !formData.senha || !formData.especialidadeId) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await api.post("/profissionalDaSaude/cadastrar", {
        nome: formData.nome,
        username: formData.username,
        senha: formData.senha,
        telefone: formData.telefone,
        rua: formData.rua,
        bairro: formData.bairro,
        numero_casa: formData.numero_casa,
        cidade: formData.cidade,
        especialidade: {
          id: Number(formData.especialidadeId),
        },
      });

      toast.success("Profissional cadastrado com sucesso!");

      setFormData(initialFormData);
      onClose();

    } catch (error) {
      toast.error("Erro ao cadastrar o Profissional!");
      console.error("Erro ao cadastrar profissional:", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const res = await api.get("/especialidade/visualizar");
        setEspecialidades(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEspecialidades();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Cadastrar Profissional de Saúde</h3>
        {/* Informações Gerais */}
        <FormDescriptor label="Informações Gerais" />
        <div className="input-group">
          <InputField label="Nome" value={formData.nome} onChange={handleChange} placeholder="Insira o nome..." name="nome" />
          <InputField label="Telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 0 0000-0000" name="telefone" />
          <SelectField label="Especialidade" value={formData.especialidadeId} onChange={handleChange} options={especialidades} name="especialidadeId" />
        </div>
        {/* Endereço */}
        <FormDescriptor label="Endereço" />
        <div className="input-group">
          <InputField label="Rua" value={formData.rua} onChange={handleChange} placeholder="Digite a rua..." name="rua" />
          <InputField label="Número" value={formData.numero_casa} onChange={handleChange} placeholder="1234" name="numero_casa" />
          <InputField label="Bairro" value={formData.bairro} onChange={handleChange} placeholder="Digite o bairro..." name="bairro" />
          <InputField label="Cidade" value={formData.cidade} onChange={handleChange} placeholder="Digite a cidade..." name="cidade" />
        </div>
        {/* Credenciais de Acesso */}
        <FormDescriptor label="Credenciais de Acesso" />
        <div className="input-group">
          <InputField label="Username" value={formData.username} onChange={handleChange} placeholder="Digite o email..." name="username" />
          <InputField label="Senha" type="password" value={formData.senha} onChange={handleChange} placeholder="Digite a senha..." name="senha" />
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

export default CadastrarProfissionalForm;
