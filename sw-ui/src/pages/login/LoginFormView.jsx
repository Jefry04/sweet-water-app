import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import InputValidator from "../../components/InputValidator";
import { notEmptyValidator } from "../../lib/validations";

const LoginFormView = ({ handleChange, handleSubmit, isValid, isAuthError, formValue = {}, errorMessage, cbValid }) => {
  return (
    <div className="login-container">
      <h1 className="login-form__title"> Sweet Water</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form__item">
          <InputValidator
            type="string"
            name="username"
            label="Usuario"
            className="login-form__text input"
            onChange={handleChange}
            validator={notEmptyValidator}
            value={formValue.username}
            cb={cbValid}
            validateOnChange={true}
          />
        </div>
        <div className="login-form__item">
          <InputValidator
            type="password"
            name="password"
            label="Contraseña"
            className="login-form__text input"
            onChange={handleChange}
            validator={notEmptyValidator}
            value={formValue.password}
            cb={cbValid}
            validateOnChange={true}
          />
          {isAuthError && <span className="login-form--error">{errorMessage}</span>}
        </div>
        <button className="login-form__button button primary" type="submit" disabled={!isValid}>
          Iniciar sesión
        </button>
      </form>
      <div className="login-image">
        <Image src={logo} width={241} height={240} alt="sweet water logo" />
      </div>
    </div>
  );
};

export default LoginFormView;
