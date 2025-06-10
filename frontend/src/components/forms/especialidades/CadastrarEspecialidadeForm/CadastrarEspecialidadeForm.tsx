import InputField from "@/components/InputField/InputField";
import { toast } from "sonner";
import "./CadastrarEspecialidadeForm.css";
import { useState } from "react";
import { especialidadeService } from "@/services/especialidadeService";
import Button from "@/components/Button/Button";
import type { Especialidade } from "@/types/Especialidade";

interface CadastrarEspecialidadeFormProps {
  onClose: () => void;
  onSuccess?: (novaEspecialidade: Especialidade) => void;
}

const CadastrarEspecialidadeForm = ({
  onClose,
  onSuccess,
}: CadastrarEspecialidadeFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async () => {
  if (!formData.nome.trim()) {
    toast.error("O nome da especialidade é obrigatório.");
    return;
  }

  try {
    const nova = await especialidadeService.cadastrarEspecialidade(formData);
    toast.success("Especialidade cadastrada com sucesso!");
    onSuccess?.(nova);
  } catch (error) {
    toast.error("Erro ao cadastrar a especialidade!");
    console.error("Erro ao cadastrar a especialidade!", error);
  }
};


  return (
    <div className="cadastrar-especialidade-form">
      <h3>Cadastrar Especialidade</h3>

      <div className="input">
        <InputField
          label="Especialidade"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Insira o nome..."
          required
        />
      </div>

      <div className="botoes">
        <Button label="Cancelar" variant="secondary" onClick={onClose} />
        <Button label="Salvar" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CadastrarEspecialidadeForm;
