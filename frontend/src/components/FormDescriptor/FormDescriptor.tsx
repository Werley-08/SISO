import './FormDescriptor.css'

interface FormDescriptorProps {
  label: string;
  className?: string;
}

const FormDescriptor: React.FC<FormDescriptorProps> = ({ label, className }) => {
    return (
        <div className={`form-descriptor ${className || ''}`}>
            <label className="form-descriptor-label">{label}</label>
        </div>
    );
}

export default FormDescriptor;
