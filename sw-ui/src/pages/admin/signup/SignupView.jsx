import React from 'react';
import { ROLES_DESCRIPTION } from '../../../lib/constants';

function SignupView({ handleInputChange, handleFormSubmit, handleCheckboxRoles }) {

  const roles = <div id='rol' className='signup-form__roles-container'>{
    Object.entries(ROLES_DESCRIPTION).map(([key, value]) => (
      <span key={key} className={'signup-form__role'}>
        <input type='checkbox' id={key} name={key} onChange={handleCheckboxRoles}/>
        <label htmlFor={key}>{value}</label>
      </span>
    ))
  }</div>;

  return (
    <div className='signup-form-container'>
      <h1>Crear Nuevo Usuario</h1>
      <form className='signup-form'>
        <label htmlFor='usuario' className='main-label'> Usuario </label>
        <input id='usuario' name='username' onChange={handleInputChange} autoCorrect='off' type='text'
               className='input' />

        <label htmlFor='nombre' className='main-label'> Nombre </label>
        <input id='nombre' name='firstName' onChange={handleInputChange} autoCorrect='off' type='text'
               className='input' />

        <label htmlFor='apellido' className='main-label'> Apellido </label>
        <input id='apellido' name='lastName' onChange={handleInputChange} autoCorrect='off' type='text'
               className='input' />

        <label htmlFor='contraseña' className='main-label'> Contraseña </label>
        <input id='contraseña' name='password' onChange={handleInputChange} autoCorrect='off' autoCapitalize='none'
               type='password' className='input' />

        <label htmlFor='rol' className='main-label'> Rol </label>
        {roles}

        <button className='signup-form__button button primary' onClick={handleFormSubmit}>Crear Usuario</button>
      </form>
    </div>
  );
}

export default SignupView;
