import './DateSelector.css';

type Props = {
  className?: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

const DateSelector = ({ className = "", label, value, onChange, id = "date-selector" }: Props) => {

    return (
        <div className={`dateselector-container ${className}`}>
            <div className="dateselector-container__input-wrapper">
                <label htmlFor={id} className="dateselector-container__label">
                    {label}
                </label>
                <input
                    type="date"
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="dateselector-container__input"
                />
            </div>
        </div>
    );
};

export default DateSelector 