import './VoltarButton.css';
import { ReactComponent as VoltarIcon } from "../../assets/icons/Voltar-icon.svg";

type Props = {
  text?: string;
  onClick: () => void;
  className?: string;
};

const VoltarButton = ({ text = "Voltar", onClick, className = "" }: Props) => {
  return (
    <div
      className={`voltar-button ${className}`}
      onClick={onClick}
      role="button"
    >
      <VoltarIcon className="voltar-button__icon" />
      <span className="voltar-button__text">{text}</span>
    </div>
  );
};

export default VoltarButton;
