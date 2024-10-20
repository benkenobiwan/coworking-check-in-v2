const FormRow = ({
  labelText,
  hideLabel = false,
  type,
  name,
  placeholder,
  defaultValue,
  pattern,
  notRequired = false,
  autoComplete,
  onChange,
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
        defaultValue={defaultValue || ''}
        pattern={pattern}
        required={!notRequired}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  )
}
export default FormRow
