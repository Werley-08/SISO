import { useEffect, useState } from 'react';
import './AgendamentosCard.css'
import type { Sessao } from '@/types/Sessao';
import { useCallback } from 'react';
import { tratamentoService } from '@/services/tratamentoService';
import type { Tratamento } from '@/types/Tratamento';
import Label from '@/components/Label/Label';

type Props = {
  className?: string;
  sessao: Sessao;
  onCardClick?: (sessao: Sessao) => void;
};

const AgendamentosCard = ({ className = "", sessao, onCardClick }: Props) => {

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

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'realizada':
                return '#10B981';
            case 'pendente':
                return '#F59E0B';
            case 'cancelada':
                return '#EF4444';
            default:
                return '#F59E0B';
        }
    };

    const handleCardClick = () => {
        if (onCardClick) {
            onCardClick(sessao);
        }
    };

    return (
        <div 
            className={`agendamentos-card-container ${className}`} 
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            <div className='agendamentos-card-container__card'> 
                <div className='agendamentos-card-container__card-header'>
                    <div className='agendamentos-card-container__card-time'>
                        {formatarHorario(sessao.hora_inicio)} - {formatarHorario(sessao.hora_finalizacao)}
                    </div>
                    <Label 
                        text={sessao.status}
                        color={getStatusColor(sessao.status)}
                    />
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