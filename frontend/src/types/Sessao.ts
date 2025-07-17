export type Sessao = {
  id: number;
  data: string; 
  hora_inicio: string; 
  hora_finalizacao: string; 
  status: string;
  outras_informacoes?: string;
  id_tratamento: number;
};