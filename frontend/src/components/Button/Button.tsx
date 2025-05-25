import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' ;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', type = 'button' }) => (
  <button type={type} onClick={onClick} className={`btn ${variant}`}>
    {label}
  </button>
);

export default Button;
