import { useState, useRef, useEffect, useMemo } from "react";
import type { Especialidade } from "@/types/Especialidade";
import ActionButton from "@/components/ActionButton/ActionButton";
import Modal from "@/components/Modal/Modal";
import { ReactComponent as PencilIcon } from "@/assets/icons/Pencil-icon.svg";
import "./DropdownEspecialidade.css";
import ActionMenu from "@/components/ActionMenu/ActionMenu";
import SearchBar from "@/components/SearchBar/SearchBar";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Especialidade[];
  actionLabel: string;
  modalContent: (onClose: () => void) => React.ReactNode;
  editModalContent?: (
    especialidade: Especialidade,
    onClose: () => void
  ) => React.ReactNode;
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
  editModalContent,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editando, setEditando] = useState<Especialidade | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = options.filter((opt) =>
    opt.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const openEditModal = (especialidade: Especialidade) => {
    setEditando(especialidade);
    setIsOpen(false);
  };

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
          <div className="dropdown-actions">
            <div
              className="dropdown-search"
              onClick={(e) => e.stopPropagation()}
              onInputCapture={(e) => {
                const target = e.target as HTMLInputElement;
                if (target?.type === "search") {
                  setSearchTerm(target.value);
                }
              }}
            >
              <SearchBar className="dropdown-search-bar" />
            </div>

            <div className="dropdown-action-button-wrapper">
              <ActionButton
                text={actionLabel}
                onClick={() => {
                  setIsOpen(false);
                  setShowModal(true);
                }}
              />
            </div>
          </div>

          <div className="dropdown-options-scroll">
            {filteredOptions.map((opt) => (
              <div key={opt.id} className="dropdown-option">
                <span
                  onClick={() => {
                    onChange(opt.id.toString());
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="option-label"
                >
                  {opt.nome}
                </span>

                <ActionMenu
                  className="edit-icon"
                  icons={[
                    {
                      icon: <PencilIcon />,
                      onClick: () => openEditModal(opt),
                    },
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <Modal isOpen={true} onClose={() => setShowModal(false)}>
          {modalContent(() => setShowModal(false))}
        </Modal>
      )}

      {editando && editModalContent && (
        <Modal isOpen={true} onClose={() => setEditando(null)}>
          {editModalContent(editando, () => setEditando(null))}
        </Modal>
      )}
    </div>
  );
};

export default DropdownEspecialidade;
