import "./CadastrarTratamentoForm.css";
import SelectField from "@/components/SelectField/SelectField";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import { procedimentoService } from "@/services/procedimentoService";
import { useEffect, useState } from "react";
import type { Procedimento } from "@/types/Procedimento";
import type { Usuarios } from "@/types/Usuarios";
import { profissionalDaSaudeService } from "@/services/profissionalDaSaudeService";
import { tratamentoService } from "@/services/tratamentoService";
import type { Paciente } from "@/types/Paciente";
import { toast } from "sonner";

interface CadastrarTratamentoFormProps {
    onClose: () => void;
    onSuccess?: () => void;
    paciente: Paciente;
}

const CadastrarTratamentoForm = ({ paciente, onClose, onSuccess }: CadastrarTratamentoFormProps) => {
    const [listaProcedimentos, setListaProcedimentos] = useState<Procedimento[]>([]);
    const [listaProfissionais, setListaProfissionais] = useState<Usuarios[]>([]);

    const [procedimentoSelecionadoId, setProcedimentoSelecionadoId] = useState<number | null>(null);
    const [profissionalSelecionadoId, setProfissionalSelecionadoId] = useState<number | null>(null);
    const [dataInicio, setDataInicio] = useState("");
    const [outrasInformacoes, setOutrasInformacoes] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profissionais, procedimentos] = await Promise.all([
                    profissionalDaSaudeService.listarProfissionais(),
                    procedimentoService.listarProcedimentos()
                ]);
                setListaProfissionais(profissionais);
                setListaProcedimentos(procedimentos);
            } catch (error) {
                console.error("Erro ao carregar dados: ", error);
            }
        };

        fetchData();

    }, []);


    const handleProcedimentoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProcedimentoSelecionadoId(Number(event.target.value));
    };

    const handleProfissionalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProfissionalSelecionadoId(Number(event.target.value));
    };

    const handleDataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataInicio(event.target.value);
    };

    const handleOutrasInformacoesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutrasInformacoes(event.target.value);
    };

    const formatarDataParaBR = (dataISO: string): string => {
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}/${mes}/${ano}`;
    };


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!dataInicio || !profissionalSelecionadoId || !procedimentoSelecionadoId) {
            toast.error("Preencha todos os campos obrigatórios.");
            return;
        }

        const profissionalSelecionado = listaProfissionais.find(p => p.id === profissionalSelecionadoId);
        const procedimentoSelecionado = listaProcedimentos.find(p => p.id === procedimentoSelecionadoId);

        if (!profissionalSelecionado || !procedimentoSelecionado) {
            toast.error("Profissional ou procedimento inválido.");
            return;
        }

        const tratamentoPayload = {
            data_inicio: formatarDataParaBR(dataInicio),
            outras_informacoes: outrasInformacoes,
            profissional_id: profissionalSelecionado.id,
            procedimento_id: procedimentoSelecionado.id,
            paciente_id: paciente.id
        };

        try {
            await tratamentoService.cadastrarTratamento(tratamentoPayload);
            toast.success("Tratamento cadastrado com sucesso!");
            if (onSuccess) onSuccess(); //Lembrar de mexer nisso
            onClose();
        } catch (error) {
            console.error("Erro ao cadastrar tratamento:", error);
            toast.error("Erro ao cadastrar tratamento!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cadastrarTratamentoForm-content">
            <h3>Cadastrar Tratamento</h3>
            <div className="cadastrarTratamentoForm-inputs">
                <InputField
                    label={"Data de Início"}
                    type="date"
                    value={dataInicio}
                    onChange={handleDataInicioChange}
                    name={"dataInicio"}
                    placeholder="--/--/----"
                />
                <SelectField
                    label={"Profissional Responsável"}
                    value={profissionalSelecionadoId?.toString() || ""}
                    onChange={handleProfissionalChange}
                    options={listaProfissionais.map(profissional => ({
                        id: profissional.id,
                        nome: profissional.nome
                    }))}
                    name={"profissional"}
                />
                <SelectField
                    label="Procedimento"
                    value={procedimentoSelecionadoId?.toString() || ""}
                    onChange={handleProcedimentoChange}
                    options={listaProcedimentos.map(procedimento => ({
                        id: procedimento.id,
                        nome: procedimento.nome
                    }))}
                    name="procedimento"
                />
                <InputField
                    label="Outras informações"
                    value={outrasInformacoes}
                    onChange={handleOutrasInformacoesChange}
                    name="outras_informacoes"
                    placeholder="Outras informações..."
                />
            </div>

            <div className="cadastrarTratamentoForm-botoes">
                <Button label="Cancelar" variant="secondary" onClick={onClose} />
                <Button label="Salvar" type="submit" />
            </div>
        </form>
    );
};

export default CadastrarTratamentoForm;
