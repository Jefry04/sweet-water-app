import React, {useState} from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const LoginFormView = ({ handleChange, handleSubmit, isEmpty, isAuthError, focused, handleFocus}) => {

  return (
    <div className="login-container">
      <div className="login-form__title">
        <h2> Sweet Water</h2>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <p> Usuario </p>
          <input
            className="login-form__text"
            type="string"
            name="username"
            placeholder="Usuario"
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />
        </div>
        <div>
          <p> Contraseña </p>
          <input
            className="login-form__text"
            type="password"
            name="password"
            required
            placeholder="Contraseña"
            focused={focused.toString()}
            onBlur={handleFocus}
            onChange={handleChange}
          />
          <span
          focused={isAuthError.toString()}
          >
            Usuario y/o contraseña incorrecto
          </span>
        </div>
        <button 
          type="submit"
          disabled={isEmpty}
          >
            Inicio sesión 
        </button>
      </form>
      <div className="login-image">
        <Image src={logo} width={241} height={240} />
      </div>
    </div>
  );
};

export default LoginFormView;
