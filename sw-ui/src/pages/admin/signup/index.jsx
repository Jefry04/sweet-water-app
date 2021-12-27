import React, { useState } from 'react';
import SignupView from './SignupView';

function Signup() {
  const [formValue, setFormValue] = useState({})

  const handleInputChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  const handleCheckboxRoles = (event) => {
    const currentRoles = formValue.roles || [];
    if(event.target.checked) {
      currentRoles.push(event.target.name)
      setFormValue({
        ...formValue,
        roles: currentRoles
      })
    } else {
      const toDelete = currentRoles.indexOf(event.target.name)
      if (toDelete > -1) {
        currentRoles.splice(toDelete, 1);
      }
      setFormValue({
        ...formValue,
        roles: currentRoles
      })
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aqui va el POST
    console.log(formValue)
  }
  return (
    <SignupView handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} handleCheckboxRoles={handleCheckboxRoles}/>
  );
}

export default Signup;
