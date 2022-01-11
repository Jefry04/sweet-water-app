import React from "react";
import { ROLES_DESCRIPTION } from "lib/constants";
import InputValidator from "components/InputValidator";
import { notEmptyValidator, passwordValidator, usernameValidator } from "lib/validations";

function SignupForm({
  formValue,
  handleInputChange,
  handleFormSubmit,
  handleCheckboxRoles,
  isValid,
  validCb,
  signupError,
  errorMessage,
}) {
  const { username, firstName, lastName, password, roles } = formValue;

  return (
    <div className="container">
      <div className="signup-form-container">
        <h1>Crear Nuevo Usuario</h1>
        <form className="signup-form">
          <InputValidator
            name="username"
            label="Usuario *"
            type="text"
            value={username}
            onChange={handleInputChange}
            validator={usernameValidator}
            cb={validCb}
            externalError={signupError}
          />
          <InputValidator
            name="firstName"
            label="Nombre *"
            type="text"
            value={firstName}
            onChange={handleInputChange}
            validator={notEmptyValidator}
            cb={validCb}
          />
          <InputValidator
            name="lastName"
            label="Apellido *"
            type="text"
            value={lastName}
            onChange={handleInputChange}
            validator={notEmptyValidator}
            cb={validCb}
          />
          <InputValidator
            name="password"
            label="Contraseña *"
            type="password"
            value={password}
            onChange={handleInputChange}
            validator={passwordValidator}
            cb={validCb}
          />
          <label htmlFor="rol" className="main-label">
            Rol
          </label>
          <CheckboxRoles handleCheckboxRoles={handleCheckboxRoles} roles={roles} />
          {signupError && <span className="signup-form--error">{errorMessage}</span>}
          <button className="signup-form__button button primary" onClick={handleFormSubmit} disabled={!isValid}>
            Crear Usuario
          </button>
        </form>
      </div>
    </div>
  );
}

const CheckboxRoles = ({ handleCheckboxRoles, roles }) => {
  return (
    <div id="rol" className="signup-form__roles-container">
      {Object.entries(ROLES_DESCRIPTION).map(([key, value]) => {
        const isChecked = roles.includes(key);
        return (
          <span key={key} className={"signup-form__role"}>
            <input type="checkbox" id={key} value={key} name={key} onChange={handleCheckboxRoles} checked={isChecked} />
            <label htmlFor={key}>{value}</label>
          </span>
        );
      })}
    </div>
  );
};

export default SignupForm;
