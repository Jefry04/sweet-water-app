import React, { useState } from 'react';
import useDidMountEffect from '../hooks/useDidMountEffect';

function InputValidator({
  name,
  value,
  validator,
  onChange,
  label,
  type,
  cb,
  externalError,
  className = "input",
  validateOnChange = false,
}) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass = `${className} ${error || externalError ? "input--error" : ""}`;

  useDidMountEffect(() => {
    if(validateOnChange) {
      handleValidation()
    }
  }, [value])

  const handleValidation = () => {
    const { isValid, error = "" } = validator(value);
    if (!isValid) {
      setError(true);
      setErrorMessage(error);
    } else {
      setError(false);
      setErrorMessage("");
    }
    if (cb) {
      cb({
        [name]: isValid,
      });
    }
  };

  return (
    <>
      <label htmlFor={name} className="main-label">
        {label}
      </label>
      <input
        autoCorrect="off"
        autoCapitalize="none"
        id={name}
        value={value}
        name={name}
        type={type}
        className={inputClass}
        onChange={onChange}
        onBlur={handleValidation}
      />
      {error && <span className="input_error-msg">{errorMessage}</span>}
    </>
  );
}

export default InputValidator;
