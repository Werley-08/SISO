import { forwardRef } from "react";
import "./TimeInput.css";

interface TimeInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    id?: string;
}

const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
    ({ label, id, step = 60, className, ...rest }, ref) => {
        const inputId = id ?? rest.name ?? "time-input";

        return (
            <div className={`timeinput-container ${className ?? ""}`}>
                {label && <label htmlFor={inputId}>{label}</label>}

                <input
                    id={inputId}
                    type="time"
                    step={step}
                    ref={ref}
                    {...rest}
                />
            </div>
        );
    }
);

export default TimeInput;
