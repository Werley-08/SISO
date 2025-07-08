export interface Anamnese {
  id: number;
  idPaciente: number;

  peso: number;
  altura: number;
  alergias: string;
  medicamentos: boolean;      
  doencasCronica: boolean;    
}
