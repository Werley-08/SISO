import React from 'react';
import FormDescriptor from '@/components/FormDescriptor/FormDescriptor';
import type { Paciente } from '@/types/Paciente';
import "./DadosPessoais.css"
import Label from '@/components/Label/Label';

interface DadosPessoaisProps {
    paciente: Paciente;
}

const DadosPessoais: React.FC<DadosPessoaisProps> = ({ paciente }) => {

    return (
        <div className="pacienteProfile-tabContent">
            <div className="dadosPessoais-formDescriptor-wrapper">
                <FormDescriptor label="Informações Pessoais" />
            </div>
            <div className="dadosPessoais-container">
                <div className="dadosPessoais-section">
                    <div className="dadosPessoais-grid">
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Status:</label>
                            <span className="dadosPessoais-item-value">
                                <Label
                                    text={paciente.status || "Status não informado"}
                                    color={paciente.status === 'ATIVO' ? '#48C9B0' : '#DB0D4B'}
                                />
                            </span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Telefone:</label>
                            <span className="dadosPessoais-item-value">{paciente.telefone || "Telefone não informado"}</span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Data de Nascimento:</label>
                            <span className="dadosPessoais-item-value">{paciente.data_nascimento || "Data de nascimento não informada"}</span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Classificação Etária:</label>
                            <span className="dadosPessoais-item-value">{paciente.classificacao_etaria || "Classificação etária não informada"}</span>
                        </div>
                    </div>
                </div>

                {paciente.classificacao_etaria?.toUpperCase() === "MENOR" && paciente.responsavel && (
                    <div className="dadosPessoais-section">
                        <div className="dadosPessoais-formDescriptor-wrapper">
                            <FormDescriptor label="Responsável" />
                        </div>
                        <div className="dadosPessoais-grid">
                            <div className="dadosPessoais-item">
                                <label className="dadosPessoais-item-label">Nome do Responsável:</label>
                                <span className="dadosPessoais-item-value">{paciente.responsavel.nome || "Nome não informado"}</span>
                            </div>
                            <div className="dadosPessoais-item">
                                <label className="dadosPessoais-item-label">Telefone:</label>
                                <span className="dadosPessoais-item-value">{paciente.responsavel.telefone || "Telefone não informado"}</span>
                            </div>
                            <div className="dadosPessoais-item">
                                <label className="dadosPessoais-item-label">Parentesco:</label>
                                <span className="dadosPessoais-item-value">{paciente.responsavel.parentesco || "Parentesco não informado"}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="dadosPessoais-section">
                    <div className="dadosPessoais-formDescriptor-wrapper">
                        <FormDescriptor label="Endereço" />
                    </div>
                    <div className="dadosPessoais-grid">
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Rua:</label>
                            <span className="dadosPessoais-item-value">{paciente.rua || "Rua não informada"}</span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Número:</label>
                            <span className="dadosPessoais-item-value">{paciente.num_casa || "Número não informado"}</span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Bairro:</label>
                            <span className="dadosPessoais-item-value">{paciente.bairro || "Bairro não informado"}</span>
                        </div>
                        <div className="dadosPessoais-item">
                            <label className="dadosPessoais-item-label">Cidade:</label>
                            <span className="dadosPessoais-item-value">{paciente.cidade || "Cidade não informada"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DadosPessoais;