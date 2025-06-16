import InputField from "@/components/InputField/InputField";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { especialidadeService } from "@/services/especialidadeService";
import { toast } from "sonner";
import type { Especialidade } from "@/types/Especialidade";
import "./EditarEspecialidadeForm.css";

interface Props {
  especialidade: Especialidade;
  onClose: () => void;
  onSuccess?: (especialidadeAtualizada: Especialidade) => void;
}

const EditarEspecialidadeForm = ({
  especialidade,
  onClose,
  onSuccess,
}: Props) => {
  const [formData, setFormData] = useState({ nome: especialidade.nome });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.nome.trim()) {
      toast.error("O nome da especialidade é obrigatório.");
      return;
    }

    try {
      const atualizada = await especialidadeService.editarEspecialidade(
        especialidade.id,
        {
          id: especialidade.id,
          nome: formData.nome,
        }
      );

      toast.success("Especialidade atualizada!");
      onSuccess?.(atualizada);
      onClose();
    } catch (error) {
      toast.error("Erro ao atualizar especialidade.");
      console.error(error);
    }
  };

  return (
    <div className="editar-especialidade-form">
      <h3>Editar Especialidade</h3>
      <InputField
        label="Especialidade"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Insira o nome..."
        required
      />
      <div className="botoes">
        <Button label="Cancelar" variant="secondary" onClick={onClose} />
        <Button label="Salvar" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EditarEspecialidadeForm;
