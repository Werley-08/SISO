import './AgendamentosColumn.css'
import type { Sessao } from '@/types/Sessao';
import { useEffect, type SetStateAction } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { sessaoService } from '@/services/sessaoService';
import AgendamentosCard from '../AgendamentosCard/AgendamentosCard';

type Props = {
  className?: string;
  date: string;
  DiaDaSemana: string;
};

/**
 * Componente de coluna para exibir agendamentos de um dia específico
 * 
 * Funcionalidades:
 * - Scroll vertical automático quando há muitos cards
 * - Estados de loading e vazio
 * - Carregamento dinâmico baseado no papel do usuário
 * - Altura responsiva com scroll interno
 */
const AgendamentosColumn = ({ className = "", date, DiaDaSemana}: Props) => {

    const [sessoes, setSessoes] = useState<Sessao[]>([]);
    const [loading, setLoading] = useState(true);
    const role = localStorage.getItem('role') || '';

    const fetchSessoes = useCallback(async () => {
        try {
            setLoading(true);
            let data: SetStateAction<Sessao[]> = [];
            if (role === 'RECEPCIONISTA') {
                data = await sessaoService.listarSessoesRecepcionista(date);
            } 
            if (role === 'PROFISSIONAL_DA_SAUDE') {
                // data = await sessaoService.listarSessoesProfissional(date);
            }
            setSessoes(data);
        } catch (error) {
            console.error('Erro ao carregar os agendamentos:', error);
        } finally {
            setLoading(false);
        }
    }, [date, role]);

    useEffect(() => {
        fetchSessoes();
    }, [fetchSessoes]);

    return (
        <div className={`agendamentos-column-container ${className}`}>
            <div className='agendamentos-column-container__title'> 
                {DiaDaSemana}
            </div>
            <div className='agendamentos-column-container__content'> 
                {loading ? (
                    <div className='agendamentos-column-container__loading'>
                        Carregando agendamentos...
                    </div>
                ) : sessoes.length === 0 ? (
                    <div className='agendamentos-column-container__empty'>
                        Nenhum agendamento para este dia
                    </div>
                ) : (
                    sessoes.map((sessao) => (
                        <AgendamentosCard key={sessao.id} sessao={sessao} />
                    ))
                )}
            </div>
        </div>
    );
};

export default AgendamentosColumn