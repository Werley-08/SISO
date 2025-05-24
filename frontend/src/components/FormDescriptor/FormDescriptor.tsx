import './FormDescriptor.css'

interface FormDescriptorProps {
  label: string;
}

const FormDescriptor: React.FC<FormDescriptorProps> = ({ label }) => {
    return (
        <div className="form-descriptor">
            <label className="form-descriptor-label">{label}</label>
        </div>
    );
}

export default FormDescriptor;
