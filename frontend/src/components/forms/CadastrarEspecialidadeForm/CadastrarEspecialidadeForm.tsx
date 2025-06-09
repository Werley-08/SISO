import { useState } from "react";
import { createPortal } from "react-dom";
import { especialidadeService } from "@/services/especialidadeService";
import type { Especialidade } from "@/types/Especialidade";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCadastrada: (especialidade: Especialidade) => void;
}

export default function ModalCadastrarEspecialidade({ isOpen, onClose, onCadastrada }: Props) {
  const [formData, setFormData] = useState({ nome: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const novaEspecialidade = await especialidadeService.cadastrarEspecialidade(formData.nome);
      onCadastrada(novaEspecialidade);
      setFormData({ nome: "" });
      onClose();
    } catch {
      alert("Erro ao cadastrar especialidade");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Cadastrar Especialidade</h4>

        <form onSubmit={handleSubmit}>
          <FormDescriptor className="form-descriptor" label="Informações da Especialidade" />
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
            <Button label="Cancelar" variant="secondary" type="button" onClick={onClose} />
            <Button label={loading ? "Salvando..." : "Salvar"} type="submit" />
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
