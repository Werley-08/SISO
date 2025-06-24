export interface Paciente {
    id: number;
    nome: string;
    data_nascimento: string;
    telefone: string;
    rua: string;
    bairro: string;
    cidade: string;
    num_casa: string;
    classificacao_etaria: string;
    status: string;
    responsavel?: {
        id?: number; 
        nome: string;
        telefone: string;
        parentesco: string;
    };

}
