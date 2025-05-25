import './ActionButton.css'
import { ReactComponent as AddIcon } from "../../assets/icons/Add-icon.svg"

type Props = {
  text?: string;
  className?: string;
  onClick?: () => void;
};

const ActionButton = ({ text, className = "", onClick } : Props) => {

    return (
        <div className={`actionbutton-container ${className}`}
             onClick={onClick}
             role='button'
        >
            <div className='actionbutton-container__text'> <span> {text} </span> </div>
            <div className='actionbutton-container__icon'> <span> <AddIcon/> </span> </div>
        </div>
    );
};

export default ActionButton