import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { especialidadeService } from "@/services/especialidadeService";
import type { Especialidade } from "@/types/Especialidade";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  especialidade: Especialidade;
  onEditada: (especialidade: Especialidade) => void;
}

export default function ModalEditarEspecialidade({
  isOpen,
  onClose,
  especialidade,
  onEditada,
}: Props) {
  const [formData, setFormData] = useState({ nome: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (especialidade) {
      setFormData({ nome: especialidade.nome });
    }
  }, [especialidade]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; 

    const nomeValido = formData.nome.trim();
    if (!nomeValido) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      await especialidadeService.editarEspecialidade(
        especialidade.id,
        nomeValido
      );

      const especialidadeAtualizada = { ...especialidade, nome: nomeValido };

      toast.success("Especialidade atualizada com sucesso!");
      onEditada(especialidadeAtualizada);
      onClose();
    } catch (error) {
      console.error("Erro ao editar especialidade:", error);
      toast.error("Erro ao editar especialidade.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h4 className="modal-title">Editar Especialidade</h4>

        <form onSubmit={handleSubmit}>
          <FormDescriptor
            className="form-descriptor"
            label="Informações da Especialidade"
          />
          <div className="input-group">
            <InputField
              label="Nome da Especialidade"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome..."
              name="nome"
              required
            />
          </div>

          <div className="botoes" style={{ marginTop: 24 }}>
            <Button
              label="Cancelar"
              variant="secondary"
              type="button"
              onClick={onClose}
            />
            <Button
              label={loading ? "Salvando..." : "Salvar"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
