import { useEffect, useState } from 'react';
import './AgendamentosCard.css'
import type { Sessao } from '@/types/Sessao';
import { useCallback } from 'react';
import { tratamentoService } from '@/services/tratamentoService';
import type { Tratamento } from '@/types/Tratamento';

type Props = {
  className?: string;
  sessao: Sessao;
};

const AgendamentosCard = ({ className = "", sessao }: Props) => {

    const [currentTratamento, setCurrentTratamento] = useState<Tratamento | null>(null);

    const fetchTratamento = useCallback(async () => {
        try {
            const data = await tratamentoService.visualizarTratamentoById(sessao.id_tratamento);
            setCurrentTratamento(data);
        } catch (error) {
            console.error('Erro ao carregar o tratamento associado a essa sessão', error);
        } finally {
        }
    }, []);

    useEffect(() => {
        fetchTratamento();
    }, [fetchTratamento]);

    const formatarHorario = (hora: string) => {
        return hora.substring(0, 5);
    };

    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'realizada':
                return 'realizada';
            case 'pendente':
                return 'pendente';
            case 'cancelada':
                return 'cancelada';
            default:
                return 'pendente';
        }
    };

    return (
        <div className={`agendamentos-card-container ${className}`}>
            <div className='agendamentos-card-container__card'> 
                <div className='agendamentos-card-container__card-header'>
                    <div className='agendamentos-card-container__card-time'>
                        {formatarHorario(sessao.hora_inicio)} - {formatarHorario(sessao.hora_finalizacao)}
                    </div>
                    <div className={`agendamentos-card-container__card-status ${getStatusClass(sessao.status)}`}>
                        {sessao.status}
                    </div>
                </div>
                <div className='agendamentos-card-container__card-info'>
                    <div><strong>Paciente:</strong> {currentTratamento?.paciente?.nome || 'Carregando...'}</div>
                    <div><strong>Data:</strong> {sessao.data}</div>
                    {sessao.outras_informacoes && (
                        <div className="highlight">
                            <strong>Observações:</strong> {sessao.outras_informacoes}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AgendamentosCard