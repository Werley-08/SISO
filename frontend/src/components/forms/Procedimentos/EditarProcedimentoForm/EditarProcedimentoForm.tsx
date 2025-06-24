import "../CadastrarProcedimentoForm.css"; 
import Button from "@/components/Button/Button";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import InputField from "@/components/InputField/InputField";
import { procedimentoService } from "@/services/procedimentoService";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import type { Procedimento } from "@/types/Procedimento";

interface EditarProcedimentoFormProps {
  procedimento: Procedimento;
  onClose: () => void;
  onSuccess?: () => void;
}

const EditarProcedimentoForm = ({
  procedimento,
  onClose,
  onSuccess,
}: EditarProcedimentoFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    duracao_em_sessao: "",
  });

  useEffect(() => {
    setFormData({
      nome: procedimento.nome,
      preco: String(procedimento.preco),
      duracao_em_sessao: String(procedimento.duracao_em_sessao),
    });
  }, [procedimento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ["nome", "preco", "duracao_em_sessao"];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );
    if (missingFields.length > 0) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    try {
      await procedimentoService.editarProcedimento(procedimento.id, {
        nome: formData.nome,
        preco: parseFloat(formData.preco),
        duracao_em_sessao: parseInt(formData.duracao_em_sessao, 10),
      });
      toast.success("Procedimento atualizado com sucesso!");
      onSuccess?.();
      onClose();
    } catch (error) {
      toast.error("Erro ao atualizar procedimento");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cadastrar-procedimento-form">
      <h3>Editar Procedimento</h3>

      <FormDescriptor
        className="form-descriptor"
        label="Informações do Procedimento"
      />
      <div className="input-group">
        <InputField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite o nome do procedimento..."
          required
        />
      </div>

      <FormDescriptor
        className="form-descriptor"
        label="Detalhes do Procedimento"
      />
      <div className="input-group">
        <InputField
          label="Preço (R$)"
          name="preco"
          type="number"
          value={formData.preco}
          onChange={handleChange}
          placeholder="Digite o preço..."
          required
        />
        <InputField
          label="Duração (sessões)"
          name="duracao_em_sessao"
          type="number"
          value={formData.duracao_em_sessao}
          onChange={handleChange}
          placeholder="Digite a duração..."
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

export default EditarProcedimentoForm;
