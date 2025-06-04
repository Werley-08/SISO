import React from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  required = false,
  disabled = false,
}) => (
  <div className="input-field">
    <label className="input-label">{label}</label>
    <input
      className="input-element"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      required={required}
      disabled={disabled}
    />
  </div>
);

export default InputField;
