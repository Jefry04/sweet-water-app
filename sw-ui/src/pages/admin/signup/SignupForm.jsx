import React, { useEffect, useState } from 'react';
import { ROLES_DESCRIPTION } from 'lib/constants';
import InputValidator from 'components/InputValidator';
import { notEmptyValidator, passwordValidator, usernameValidator } from 'lib/validations';

function SignupForm({ formValue, handleInputChange, handleFormSubmit, handleCheckboxRoles }) {
  const { username, firstName, lastName, password, roles } = formValue;
  const [isValid, setIsValid] = useState(false)
  const [validForm, setValidForm] = useState({
    username: false,
    firstName: false,
    lastName: false,
    password: false,
    roles: false
  });

  const setValid = (validObj) => {
    setValidForm({
      ...validForm,
      ...validObj
    })
  }

  useEffect(() => {
    setIsValid(Object.values(validForm).every(value => value === true))
  }, [validForm])

  useEffect(() => {
    if (roles.length > 0) {
      setValid({ 'roles': true })
    } else {
      setValid({ 'roles': false })
    }
  }, [formValue.roles])

  return (
    <div className='signup-form-container'>
      <h1>Crear Nuevo Usuario</h1>
      <form className='signup-form'>
        <InputValidator name='username' label='Usuario *' type='text' value={username} onChange={handleInputChange}
                        validator={usernameValidator} cb={setValid} />
        <InputValidator name='firstName' label='Nombre *' type='text' value={firstName} onChange={handleInputChange}
                        validator={notEmptyValidator} cb={setValid} />
        <InputValidator name='lastName' label='Apellido *' type='text' value={lastName} onChange={handleInputChange}
                        validator={notEmptyValidator} cb={setValid} />
        <InputValidator name='password' label='Contraseña *' type='password' value={password}
                        onChange={handleInputChange} validator={passwordValidator} cb={setValid} />
        <label htmlFor='rol' className='main-label'> Rol </label>
        <CheckboxRoles handleCheckboxRoles={handleCheckboxRoles} />

        <button className='signup-form__button button primary' onClick={handleFormSubmit} disabled={!isValid}>Crear Usuario</button>
      </form>
    </div>
  );
}

const CheckboxRoles = ({ handleCheckboxRoles }) => {
  return (
    <div id='rol' className='signup-form__roles-container'>
      {Object.entries(ROLES_DESCRIPTION).map(([key, value]) => (
        <span key={key} className={'signup-form__role'}>
            <input type='checkbox' id={key} value={key} name={key} onChange={handleCheckboxRoles} />
            <label htmlFor={key}>{value}</label>
          </span>
      ))}
    </div>
  );
};

export default SignupForm;
