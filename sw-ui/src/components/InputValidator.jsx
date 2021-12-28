import React, { useState } from 'react';

function InputValidator({ name, value, validator, onChange, label, type, cb }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidation = () => {
    const { isValid, error = '' } = validator(value);
    if (!isValid) {
      setError(true);
      setErrorMessage(error);
    } else {
      setError(false);
      setErrorMessage('');
    }
    if(cb) {
      cb({
        [name]: isValid
      })
    }
  };

  return (
    <>
      <label htmlFor={name} className='main-label'> {label} </label>
      <input
        autoCorrect='off'
        autoCapitalize='none'
        id={name}
        value={value}
        name={name}
        type={type}
        className={error ? 'input input--error' : 'input'}
        onChange={onChange}
        onBlur={handleValidation} />
      {error && (
        <span className='input_error-msg'>
          {errorMessage}
        </span>
      )}
    </>
  );
}

export default InputValidator;
