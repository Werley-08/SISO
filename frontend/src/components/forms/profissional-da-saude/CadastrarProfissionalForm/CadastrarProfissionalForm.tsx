import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import "./CadastrarProfissionalForm.css";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import SelectField from "@/components/SelectField/SelectField";
import type { Especialidade } from "@/types/Especialidade";
import { toast } from "sonner";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import { especialidadeService } from "@/services/especialidadeService";

interface CadastrarProfissionalFormProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const CadastrarProfissionalForm = ({ onClose, onSuccess }: CadastrarProfissionalFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    rua: "",
    numero_casa: "",
    bairro: "",
    cidade: "",
    username: "",
    senha: "",
    especialidadeId: ""
  });

  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const especialidades = await especialidadeService.listarEspecialidades();
        setEspecialidades(especialidades);
      } catch (err) {
        console.error(err);
        toast.error("Erro ao carregar especialidades");
      }
    };
    fetchEspecialidades();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['nome', 'username', 'senha', 'especialidadeId'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const especialidade = especialidades.find(esp => esp.id === Number(formData.especialidadeId));
      
      await profissionalDaSaudeService.cadastrarProfissional({
        ...formData,
        especialidade: {
          id: Number(formData.especialidadeId),
          nome: especialidade?.nome || ''
        }
      });

      toast.success("Profissional cadastrado com sucesso!");
      onSuccess?.();
      onClose();
    } catch (error) {
      toast.error("Erro ao cadastrar o Profissional!");
      console.error("Erro ao cadastrar profissional:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cadastrar-profissional-form">
      <h3>Cadastrar Profissional de Saúde</h3>
      
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
        />
        <SelectField 
          label="Especialidade" 
          value={formData.especialidadeId} 
          onChange={handleChange} 
          options={especialidades} 
          name="especialidadeId"
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
};

export default CadastrarProfissionalForm;