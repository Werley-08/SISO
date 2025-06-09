import React, { useState, useRef, useEffect } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import ModalCadastrarEspecialidade from "@/components/forms/CadastrarEspecialidadeForm/CadastrarEspecialidadeForm";
import "../SelectField/SelectField.css";
import "./SelectWithButton.css";

interface Option {
  id: string | number;
  nome: string;
}

interface Props {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  options: Option[];
  name: string;
}

const SelectWithButton: React.FC<Props> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localOptions, setLocalOptions] = useState<Option[]>(options);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => setLocalOptions(options), [options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const selectedLabel =
    localOptions.find((opt) => String(opt.id) === String(value))?.nome ||
    "Selecione...";

  const handleCadastrada = (nova: Option) => {
    setLocalOptions((prev) => [...prev, nova]);
    onChange(nova.id);
    setIsModalOpen(false);
    setIsOpen(false);
  };

  return (
    <div className="select-field" ref={wrapperRef}>
      <label>{label}</label>
      <div
        className="custom-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedLabel}
      </div>

      {isOpen && (
        <div className="custom-dropdown" onClick={(e) => e.stopPropagation()}>

          <div className="dropdown-button-wrapper" onClick={(e) => e.stopPropagation()}>
            <ActionButton
              text="Cadastrar Especialidade"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="dropdown-options">
            {localOptions.map((opt) => (
              <div
                key={opt.id}
                className="dropdown-option"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt.id);
                  setIsOpen(false);
                }}
              >
                {opt.nome}
              </div>
            ))}
          </div>
        </div>
      )}

      <ModalCadastrarEspecialidade
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCadastrada={handleCadastrada}
      />
    </div>
  );
};

export default SelectWithButton;
