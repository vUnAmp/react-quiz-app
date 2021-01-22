const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formInput">
      {label && <label>{label}</label>}
      <input
        className="formInput-input"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
