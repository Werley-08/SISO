import React from "react";
import "./EmptyStateMessage.css";
import ActionButton from "@/components/ActionButton/ActionButton"; 


interface EmptyStateMessageProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
}


const EmptyStateMessage: React.FC<EmptyStateMessageProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  imageSrc = "/images/msg.png",
}) => {
  return (
    <div className="empty-state-container">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="empty-state-image" />
      )}
      <h2 className="empty-state-title">{title}</h2>
      <p className="empty-state-description">{description}</p>
      {buttonText && onButtonClick && (
        <ActionButton text={buttonText} onClick={onButtonClick} />
      )}
    </div>
  );
};

export default EmptyStateMessage;
