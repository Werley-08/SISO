import './label.css'

type Props = {
    className?: string;
    text?: string;
    color?: string;
};

const Label = ({className = "", text, color}: Props) => {

    return (
        <div className={`label-container ${className}`} style={{ backgroundColor: color }}>
            <div className='label-container__text'> {text} </div>
        </div>
    );
};

export default Label