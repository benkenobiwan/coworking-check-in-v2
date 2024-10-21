const FormRow = ({
  labelText,
  hideLabel = false,
  type,
  name,
  placeholder,
  value,
  defaultValue,
  pattern,
  notRequired = false,
  autoComplete,
  onChange,
  onKeyDown,
  className,
  inputClassName,
}) => {
  return (
    <div className={`${className}`}>
      {hideLabel || (
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        className={`${inputClassName}`}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        pattern={pattern}
        required={!notRequired}
        autoComplete={autoComplete}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default FormRow
