import './AgendamentosCard.css'
import type { Sessao } from '@/types/Sessao';

type Props = {
  className?: string;
  sessao: Sessao;
};

const AgendamentosCard = ({ className = "", sessao }: Props) => {

    const formatarHorario = (hora: string) => {
        return hora.substring(0, 5); // Remove segundos se houver
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