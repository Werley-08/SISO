import { useState } from "react";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import InputField from "@/components/InputField/InputField";
import SelectField from "@/components/SelectField/SelectField";
import Button from "@/components/Button/Button";
import { toast } from "sonner";
import { anamneseService } from "@/services/anamneseService";
import type { Anamnese } from "@/types/Anamnese";
import "./EditarAnamneseForm.css";

interface EditarAnamneseFormProps {
    anamnese: Anamnese;
    onClose: () => void;
    onSuccess?: () => void;
}

const EditarAnamneseForm = ({ anamnese, onClose, onSuccess }: EditarAnamneseFormProps) => {
    console.log("Anamnese recebida:", anamnese);
    console.log("ID do paciente:", anamnese.idPaciente);


    const [formData, setFormData] = useState({
        peso: anamnese.peso.toString(),
        altura: anamnese.altura.toString(),
        alergias: anamnese.alergias || "",
        medicamentos: anamnese.medicamentos ? "true" : "false",
        doencasCronica: anamnese.doencasCronica ? "true" : "false"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.peso || !formData.altura) {
            toast.error("Preencha peso e altura.");
            return;
        }

        const payload = {
            id: anamnese.id,
            peso: parseFloat(formData.peso),
            altura: parseFloat(formData.altura),
            alergias: formData.alergias,
            medicamentos: formData.medicamentos === "true",
            doencasCronica: formData.doencasCronica === "true", // camelCase aqui (pra frontend)
            paciente: { id: anamnese.idPaciente }
        };


        try {
            await anamneseService.editarAnamnese(payload);
            toast.success("Anamnese atualizada com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao atualizar a anamnese!");
            console.error(error);
        }
    };



    return (
        <form onSubmit={handleSubmit} className="editar-anamnese-form">
            <h3>Editar Anamnese</h3>

            <FormDescriptor label="Dados da Anamnese" />
            <div className="input-group">
                <InputField
                    label="Peso (kg)"
                    value={formData.peso}
                    onChange={handleChange}
                    name="peso"
                    placeholder="Ex: 70"
                    required
                />
                <InputField
                    label="Altura (cm)"
                    value={formData.altura}
                    onChange={handleChange}
                    name="altura"
                    placeholder="Ex: 170"
                    required
                />
                <InputField
                    label="Alergias"
                    value={formData.alergias}
                    onChange={handleChange}
                    name="alergias"
                    placeholder="Descreva as alergias (se houver)"
                />
                <SelectField
                    label="Faz uso de medicamentos?"
                    value={formData.medicamentos}
                    name="medicamentos"
                    options={[
                        { id: "true", nome: "Sim" },
                        { id: "false", nome: "Não" }
                    ]}
                    onChange={handleChange}
                />
                <SelectField
                    label="Possui doenças crônicas?"
                    value={formData.doencasCronica}
                    name="doencasCronica"
                    options={[
                        { id: "true", nome: "Sim" },
                        { id: "false", nome: "Não" }
                    ]}
                    onChange={handleChange}
                />
            </div>

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
};

export default EditarAnamneseForm;
