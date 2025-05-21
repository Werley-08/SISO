import React, { useState } from 'react';
import './SidebarDropdown.css';
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg";

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
        <div className="sidebar-dropdown-container">
            <button 
                className={`sidebar-dropdown-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="sidebar-option-icon">
                    {icon}
                </div>
                <span className="sidebar-option-text">{text}</span>
                <div className={`sidebar-dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    <ArrowIcon />
                </div>
            </button>
            
            <div className={`sidebar-dropdown-menu ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="sidebar-dropdown-item"
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