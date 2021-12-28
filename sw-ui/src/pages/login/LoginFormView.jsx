import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

const LoginFormView = ({ handleChange, handleSubmit, isEmpty, isAuthError, focused, handleFocus }) => {

  return (
    <div className='login-container'>
      <h1 className='login-form__title'> Sweet Water</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-form__item'>
          <p> Usuario </p>
          <input
            className='login-form__text input'
            type='string'
            name='username'
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />
        </div>
        <div className='login-form__item'>
          <p> Contraseña </p>
          <input
            className='login-form__text input'
            type='password'
            name='password'
            required
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
          className='login-form__button button primary'
          type='submit'
          disabled={isEmpty}
        >
          Iniciar sesión
        </button>
      </form>
      <div className='login-image'>
        <Image src={logo} width={241} height={240} />
      </div>
    </div>
  );
};

export default LoginFormView;
