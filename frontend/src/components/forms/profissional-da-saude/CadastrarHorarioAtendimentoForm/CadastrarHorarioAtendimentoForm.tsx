import "./CadastrarHorarioAtendimentoForm.css";
import FormDescriptor from "@/components/FormDescriptor/FormDescriptor";
import SelectField from "@/components/SelectField/SelectField";
import { useState } from "react";
import { toast } from "sonner";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import TimeInput from "@/components/TimeInput/TimeInput";
import Button from "@/components/Button/Button";
import type { Usuarios } from "@/types/Usuarios";

const diasDaSemana = [
    { id: "SEGUNDA", nome: "Segunda-feira" },
    { id: "TERCA", nome: "Terça-feira" },
    { id: "QUARTA", nome: "Quarta-feira" },
    { id: "QUINTA", nome: "Quinta-feira" },
    { id: "SEXTA", nome: "Sexta-feira" },
    { id: "SABADO", nome: "Sábado" },
    { id: "DOMINGO", nome: "Domingo" },
];

interface CadastrarHorarioAtendimentoFormProps {
    profissionalID: number;
    onClose: () => void;
    onSuccess: (profissionalAtualizado: Usuarios) => void;
}

const CadastrarHorarioAtendimentoForm = ({ profissionalID, onClose, onSuccess }: CadastrarHorarioAtendimentoFormProps) => {
    const [form, setForm] = useState({
        dia_semana: "",
        horario_inicio: "",
        horario_fim: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.dia_semana || !form.horario_inicio || !form.horario_fim) {
            toast.error("Preencha todos os campos!");
            return;
        }

        if (form.horario_inicio >= form.horario_fim) {
            toast.error("Horário inicial deve ser anterior ao final!");
            return;
        }

        try {
            const profissionalAtualizado = await profissionalDaSaudeService.cadastrarHorarioDeAtendimento(profissionalID, form);
            toast.success("Horário cadastrado com sucesso!");
            onSuccess(profissionalAtualizado);
        } catch (error) {
            toast.error("Erro ao cadastrar o horário!");
            console.log(error);
        }
    };

    return (
        <form className="cadastrarHorarioAtendimentoForm" onSubmit={handleSubmit}>
            <h3>Cadastrar novo horário de atendimento</h3>
            <FormDescriptor className="form-descriptor" label="Novo Horário" />

            <div className="input-group-horarioAtendimento">
                <SelectField
                    label="Dia da Semana"
                    name="dia_semana"
                    value={form.dia_semana}
                    onChange={handleChange}
                    options={diasDaSemana}
                />
                <TimeInput
                    label="Horário de Início"
                    name="horario_inicio"
                    value={form.horario_inicio}
                    onChange={handleChange}
                    required
                />
                <TimeInput
                    label="Horário Final"
                    name="horario_fim"
                    value={form.horario_fim}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
}

export default CadastrarHorarioAtendimentoForm;