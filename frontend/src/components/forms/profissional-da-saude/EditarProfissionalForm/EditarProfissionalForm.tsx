import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import "./EditarProfissionalForm.css";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import SelectField from "@/components/SelectField/SelectField";
import { toast } from "sonner";
import type { Usuarios } from "@/types/Usuarios";
import type { Especialidade } from "@/types/Especialidade";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import { especialidadeService } from "@/services/especialidadeService";

interface EditarProfissionalFormProps {
  onClose: () => void;
  profissional: Usuarios;
  onSuccess?: () => void;
}

const EditarProfissionalForm = ({ onClose, profissional, onSuccess }: EditarProfissionalFormProps) => {
  const [formData, setFormData] = useState<Usuarios>({
    ...profissional,
    senha: ""
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['nome', 'telefone', 'rua', 'status', 'numero_casa', 'bairro', 'cidade'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const dataToSend = {
      ...formData,
      especialidade: { id: formData.especialidade?.id ?? 0 },
      ...(formData.senha.trim() && { senha: formData.senha })
    };

    try {
      await profissionalDaSaudeService.editarProfissional(formData.id, dataToSend);
      toast.success("Profissional atualizado com sucesso!");
      onSuccess?.();
      onClose();
    } catch (error) {
      toast.error("Erro ao atualizar o profissional!");
      console.error("Erro ao atualizar profissional:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editar-profissional-form">
      <h3>Editar Profissional de Saúde</h3>
      
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
        <SelectField 
          label="Especialidade" 
          value={formData.especialidade?.id ?? 0} 
          name="especialidade" 
          options={especialidades} 
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            especialidade: { 
              id: Number(e.target.value), 
              nome: especialidades.find(esp => esp.id === Number(e.target.value))?.nome || '' 
            } 
          }))} 
        />
        <SelectField 
          label="Status" 
          value={formData.status} 
          name="status" 
          options={[
            { id: "ATIVO", nome: "ATIVO" },
            { id: "INATIVO", nome: "INATIVO" },
          ]}
          onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))} 
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

      <FormDescriptor className="form-descriptor" label="Credenciais de Acesso" />
      <div className="input-group">
        <InputField 
          label="Username" 
          value={formData.username} 
          onChange={handleChange} 
          placeholder="Digite o username..." 
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
};

export default EditarProfissionalForm;