import './AgendamentosTable.css'
import AgendamentosColumn from '../AgendamentosColumn/AgendamentosColumn';

type Props = {
  className?: string;
  date: Date;
};

const AgendamentosTable = ({ className = "", date}: Props) => {

    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const days = [];

    for (let i = 0; i < 5; i++) {
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
                    />
                ))}
            </div>

        </div>
    );
};

export default AgendamentosTable