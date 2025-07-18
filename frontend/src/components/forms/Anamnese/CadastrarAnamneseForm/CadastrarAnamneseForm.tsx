import { useState } from "react";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import InputField from "@/components/InputField/InputField";
import SelectField from "@/components/SelectField/SelectField";
import Button from "@/components/Button/Button";
import { toast } from "sonner";
import { anamneseService } from "@/services/anamneseService";
import "./CadastrarAnamneseForm.css";

interface CadastrarAnamneseFormProps {
    idPaciente: number;
    onClose: () => void;
    onSuccess?: () => void;
}

const CadastrarAnamneseForm = ({
    idPaciente,
    onClose,
    onSuccess,
}: CadastrarAnamneseFormProps) => {
    const [formData, setFormData] = useState({
        peso: "",
        altura: "",
        alergias: "",
        medicamentos: "false",
        doencas_cronicas: "false",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
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
            peso: Number(formData.peso),
            altura: Number(formData.altura),
            alergias: formData.alergias,
            medicamentos: formData.medicamentos === "true",
            doencas_cronicas: formData.doencas_cronicas === "true", 
            paciente: { id: idPaciente },                       
        };
        console.log("Payload enviado:", payload);


        try {
            await anamneseService.cadastrarAnamnese(payload);
            toast.success("Anamnese cadastrada com sucesso!");
            onSuccess?.();
            onClose();
        } catch (error) {
            toast.error("Erro ao cadastrar anamnese!");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cadastrar-anamnese-form">
            <h3>Cadastrar Anamnese</h3>

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
                        { id: "false", nome: "Não" },
                    ]}
                    onChange={handleChange}
                />
                <SelectField
                    label="Possui doenças crônicas?"
                    value={formData.doencas_cronicas}
                    name="doencasCronica"
                    options={[
                        { id: "true", nome: "Sim" },
                        { id: "false", nome: "Não" },
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

export default CadastrarAnamneseForm;
