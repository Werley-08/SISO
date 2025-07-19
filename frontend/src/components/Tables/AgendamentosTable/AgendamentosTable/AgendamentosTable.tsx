import './AgendamentosTable.css'
import AgendamentosColumn from '../AgendamentosColumn/AgendamentosColumn';
import type { Sessao } from '@/types/Sessao';

type Props = {
  className?: string;
  date: Date;
  onCardClick?: (sessao: Sessao) => void;
};

const AgendamentosTable = ({ className = "", date, onCardClick}: Props) => {

    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const days = [];

    for (let i = 1; i <= 5; i++) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + i);

        const diaSemana = diasDaSemana[newDate.getDay()];
        const dataFormatada = newDate.toLocaleDateString('pt-BR');

        days.push({ data: dataFormatada, diaSemana });
    }

    return (
        <div className={`agendamentos-table-container ${className}`}>

            <div className='agendamentos-table-container__content'> 
                {days.map((item, index) => (
                    <AgendamentosColumn 
                        key={`${item.data}-${index}`}
                        date={item.data} 
                        DiaDaSemana={item.diaSemana} 
                        onCardClick={onCardClick}
                    />
                ))}
            </div>

        </div>
    );
};

export default AgendamentosTable