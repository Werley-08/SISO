import React, { useState, useRef, useEffect } from "react";
import ActionButton from "@/components/ActionButton/ActionButton";
import ModalCadastrarEspecialidade from "@/components/forms/CadastrarEspecialidadeForm/CadastrarEspecialidadeForm";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ReactComponent as SetaIcon } from "@/assets/icons/seta-icon.svg";

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
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredOptions = localOptions.filter((opt) =>
    opt.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="select-with-button" ref={wrapperRef}>
      <label className="select-with-button__label">{label}</label>
      <div
        className="select-with-button__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedLabel}</span>
        <SetaIcon
          className={`select-with-button__arrow ${isOpen ? "select-with-button__arrow--open" : ""}`}
        />
      </div>


      {isOpen && (
        <div
          className="select-with-button__dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="select-with-button__search-wrapper"
            onClick={(e) => e.stopPropagation()}
            onInputCapture={(e) => {
              const target = e.target as HTMLInputElement;
              if (target?.type === "search") {
                setSearchTerm(target.value);
              }
            }}
          >
            <SearchBar className="select-with-button__search" />
          </div>

          <div
            className="select-with-button__button-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <ActionButton
              text="Cadastrar Especialidade"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <div className="select-with-button__options">
            {filteredOptions.map((opt) => (
              <div
                key={opt.id}
                className="select-with-button__option"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt.id);
                  setIsOpen(false);
                  setSearchTerm("");
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
