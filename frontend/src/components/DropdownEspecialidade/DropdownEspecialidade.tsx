import { useState, useRef, useEffect, useMemo } from "react";
import type { Especialidade } from "@/types/Especialidade";
import ActionButton from "../ActionButton/ActionButton";
import Modal from "../Modal/Modal";
import "./DropdownEspecialidade.css";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Especialidade[];
  actionLabel: string;
  modalContent: (onClose: () => void) => React.ReactNode;
  className?: string;
}

const DropdownEspecialidade = ({
  label,
  name,
  value,
  onChange,
  options,
  actionLabel,
  modalContent,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.id.toString() === value),
    [value, options]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`select-field ${className ?? ""}`} ref={dropdownRef}>
      <label htmlFor={name}>{label}</label>
      <div
        className="select-element dropdown-display"
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen((prev) => !prev)}
      >
        {selectedOption ? selectedOption.nome : "Selecione..."}
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-action-button-wrapper">
            <ActionButton
              text={actionLabel}
              onClick={() => {
                setIsOpen(false);
                setShowModal(true);
              }}
            />
          </div>
          {options.map((opt) => (
            <div
              key={opt.id}
              className="dropdown-option"
              onClick={() => {
                onChange(opt.id.toString());
                setIsOpen(false);
              }}
            >
              {opt.nome}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <Modal isOpen={true} onClose={() => setShowModal(false)}>
          {modalContent(() => setShowModal(false))}
        </Modal>
      )}
    </div>
  );
};

export default DropdownEspecialidade;
