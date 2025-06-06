import './IconWithText.css'

type IconWithTextProps = {
    className?: string;
    text: string;
    icon: React.ReactNode;
};

const IconWithText = ({className = "", text, icon}: IconWithTextProps) => {

    return (
        <div className={`iconWithText-container ${className}`}>
            <div className="iconWithText-container__icon"> {icon} </div>
            <div className='iconWithText-container__text'> {text} </div>
        </div>
    );
};

export default IconWithText