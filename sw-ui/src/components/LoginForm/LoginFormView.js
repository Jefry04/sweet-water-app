import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const LoginFormView = ({ handleChange, handleSubmit }) => {
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
            required
          />
          <span className="prueba">Debe ingresar usuario</span>
        </div>

        <div>
          <p> Contraseña </p>
          <input
            className="login-form__text"
            type="password"
            name="password"
            required
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <span>Ingrese contraseña</span>
        </div>
        <button type="submit">Inicio sesión </button>
      </form>
      <div className="login-image">
        <Image src={logo} width={241} height={240} />
      </div>
    </div>
  );
};

export default LoginFormView;
