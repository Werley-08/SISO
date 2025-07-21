import { useState } from "react";
import './Tabs.css';

interface Aba {
  rotulo: string;
  conteudo: React.ReactNode;
}

interface AbasProps {
  abas: Aba[];
  initialTabIndex?: number;
}

const Abas: React.FC<AbasProps> = ({ abas, initialTabIndex = 0 }) => {
  const [indiceAtivo, setIndiceAtivo] = useState(initialTabIndex);

  return (
    <div className="abas-container">
      <div className="abas-header">
        {abas.map((aba, index) => (
          <button
            key={aba.rotulo}
            className={`aba-botao ${index === indiceAtivo ? 'ativa' : ''}`}
            onClick={() => setIndiceAtivo(index)}
          >
            {aba.rotulo}
          </button>
        ))}
      </div>
      <div className="abas-conteudo">
        {abas[indiceAtivo].conteudo}
      </div>
    </div>
  );
};

export default Abas;
