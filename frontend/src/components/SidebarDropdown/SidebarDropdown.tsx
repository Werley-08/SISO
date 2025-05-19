import React, { useState } from 'react';
import './SidebarDropdown.css';
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-icon.svg";

interface SidebarDropdownProps {
    icon: React.ReactNode;
    text: string;
    options: {
        text: string;
        onClick: () => void;
    }[];
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ icon, text, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sidebaropcion">
            <button 
                className={`opcion dropdown-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="icon">
                    {icon}
                </div>
                <span className="text">{text}</span>
                <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    <ArrowIcon />
                </div>
            </button>
            
            <div className={`dropdown-options ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="dropdown-option"
                        onClick={() => {
                            option.onClick();
                            setIsOpen(false);
                        }}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SidebarDropdown; 