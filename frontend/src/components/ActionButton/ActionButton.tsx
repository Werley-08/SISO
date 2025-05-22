import './ActionButton.css'
import { ReactComponent as AddIcon } from "../../assets/icons/Add-icon.svg"

type Props = {
  text?: string;
  className?: string;
};

const ActionButton = ({text, className = ""} : Props) => {

    return (
        <div className={`actionbutton-container ${className}`}>
            <div className='actionbutton-container__text'> <span> {text} </span> </div>
            <div className='actionbutton-container__icon'> <span> <AddIcon/> </span> </div>
        </div>
    );
};

export default ActionButton