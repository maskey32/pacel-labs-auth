const Input = ({ 
    type, 
    name, 
    value, 
    onChange, 
    placeholder, 
    required 
}) => {
    return (
      <input
        className="form_input border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ..."
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    );
  };

export default Input;