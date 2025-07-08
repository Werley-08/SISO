import React, { useState, useEffect, useCallback } from 'react';
import EmptyStateMessage from '@/components/EmptyStateMessage/EmptyStateMessage';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import CadastrarAnamneseForm from '@/components/forms/Anamnese/CadastrarAnamneseForm/CadastrarAnamneseForm';
import EditarAnamneseForm from '@/components/forms/Anamnese/EditarAnamneseForm/EditarAnamneseForm';
import type { Paciente } from '@/types/Paciente';
import type { Anamnese } from '@/types/Anamnese';
import { anamneseService } from '@/services/anamneseService';
import './Anamnese.css';
import msgImage from '@/assets/images/msg.png';

interface AnamneseProps {
    paciente: Paciente;
}

const Anamnese: React.FC<AnamneseProps> = ({ paciente }) => {
    const [anamnese, setAnamnese] = useState<Anamnese | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

   const fetchAnamnese = useCallback(async () => {
    try {
        const data = await anamneseService.listarPorPaciente(paciente.id);
        setAnamnese(data);
    } catch (error) {
        console.error('Erro ao buscar anamnese:', error);
    }
}, [paciente.id]);

useEffect(() => {
    fetchAnamnese();
}, [fetchAnamnese]);
    const handleSuccess = () => {
        fetchAnamnese();
        setIsModalOpen(false);
        setIsEditing(false);
    };

    return (
        <div className="pacienteProfile-tabContent">
            {!anamnese ? (
                <EmptyStateMessage
                    title="Nenhuma anamnese cadastrada"
                    description="Cadastre uma anamnese para acompanhar o histórico de saúde deste paciente."
                    buttonText="Cadastrar Anamnese"
                    imageSrc={msgImage}
                    onButtonClick={() => setIsModalOpen(true)}
                />
            ) : (
                <>
                    <FormDescriptor label="Informações de Anamnese" />
                    <div className="anamnese-info">
                        <p><strong>Peso:</strong> {anamnese.peso} kg</p>
                        <p><strong>Altura:</strong> {anamnese.altura} cm</p>
                        <p><strong>Alergias:</strong> {anamnese.alergias || 'Não informado'}</p>
                        <p><strong>Uso de medicamentos:</strong> {anamnese.medicamentos ? 'Sim' : 'Não'}</p>
                        <p><strong>Doenças crônicas:</strong> {anamnese.doencasCronica || 'Não informado'}</p>
                    </div>
                    <div className="botoes">
                        <Button label="Editar Anamnese" onClick={() => { setIsModalOpen(true); setIsEditing(true); }} />
                    </div>
                </>
            )}

            <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setIsEditing(false); }}>
                {isEditing ? (
                    <EditarAnamneseForm
                        anamnese={anamnese!}
                        onClose={() => { setIsModalOpen(false); setIsEditing(false); }}
                        onSuccess={handleSuccess}
                    />
                ) : (
                    <CadastrarAnamneseForm
                        idPaciente={paciente.id}
                        onClose={() => setIsModalOpen(false)}
                        onSuccess={handleSuccess}
                    />
                )}
            </Modal>
        </div>
    );
};

export default Anamnese;
