import InputField from "@/components/InputField/InputField";
import "./CadastrarSessaoForm.css";
import { useState } from "react";
import TimeInput from "@/components/TimeInput/TimeInput";
import Button from "@/components/Button/Button";
import { toast } from "sonner";
import { sessaoService } from "@/services/sessaoService";

interface CadastrarSessaoFormProps {
    tratamentoID: number;
    onSuccess?: () => void;
    onClose: () => void;
}

const CadastrarSessaoForm = ({ tratamentoID, onSuccess, onClose }: CadastrarSessaoFormProps) => {
    const [dataSessao, setDataSessao] = useState("");
    const [horarioInicio, setHorarioInicio] = useState("");
    const [horarioFim, setHorarioFim] = useState("");
    const [outrasInformacoes, setOutrasInformacoes] = useState("");

    const handleDataSessaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataSessao(event.target.value);
    }

    const handleHorarioInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHorarioInicio(event.target.value);
    }

    const handleHorarioFimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHorarioFim(event.target.value);
    }

    const handleOutrasInformacoesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutrasInformacoes(event.target.value);
    };

    const formatarDataParaBR = (dataISO: string): string => {
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}/${mes}/${ano}`;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!dataSessao || !horarioInicio || !horarioFim) {
            toast.error("Preencha todos os campos obrigatórios!");
            return;
        }

        const sessaoPayload = {
            data: formatarDataParaBR(dataSessao),
            hora_inicio: horarioInicio,
            hora_finalizacao: horarioFim,
            outras_informacoes: outrasInformacoes,
        }

        try {
            await sessaoService.cadastrarSessao(tratamentoID, sessaoPayload);
            toast.success("Sessão registrada com sucesso!");
            if (onSuccess) onSuccess();
            onClose();
        } catch(error) {
            console.error("Erro ao cadastrar sessão: ", error);
            toast.error("Erro ao registrar sessão.");
        }
    }

    return (
        <form className="cadastrarSessaoForm-content" onSubmit={handleSubmit}>
            <h3>Agendar Sessão</h3>
            <div className="cadastrarSessaoForm-inputs">
                <InputField
                    label="Data da sessão"
                    type="date"
                    value={dataSessao}
                    onChange={handleDataSessaoChange}
                    name="dataSessao"
                    placeholder="--/--/----"
                    required
                />
                <TimeInput
                    label="Horário de Início"
                    name="horario_inicio"
                    value={horarioInicio}
                    onChange={handleHorarioInicioChange}
                    required
                />
                <TimeInput
                    label="Horário Final"
                    name="horario_fim"
                    value={horarioFim}
                    onChange={handleHorarioFimChange}
                    required
                />
                <InputField
                    label="Outras Informações"
                    value={outrasInformacoes}
                    onChange={handleOutrasInformacoesChange}
                    name="outras_informacoes"
                    placeholder="Outras informações..."
                />
            </div>

            <div className="cadastrarSessaoForm-botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
}

export default CadastrarSessaoForm;