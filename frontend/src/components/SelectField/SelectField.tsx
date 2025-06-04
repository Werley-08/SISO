import "./SelectField.css";

interface SelectFieldProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { id: string | number; nome: string }[];
  name: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  name,
}) => (
  <div className="select-field">
    <label>{label}</label>
    <select
      className="select-element"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option value="">Selecione...</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.nome}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
