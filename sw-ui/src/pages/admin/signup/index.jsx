import React, from 'react';
import SignupForm from './SignupForm';
import { useForm } from 'hooks/useForm';

function Signup() {
  const [formValue, handleInputChange, setFormValue] = useForm({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    roles: []
  });

  const handleCheckboxRoles = (event) => {
    const currentRoles = [...formValue.roles];
    if (event.target.checked) {
      currentRoles.push(event.target.name);
      setFormValue({
        ...formValue,
        roles: currentRoles,
      });
    } else {
      const toDelete = currentRoles.indexOf(event.target.name);
      if (toDelete > -1) {
        currentRoles.splice(toDelete, 1);
      }
      setFormValue({
        ...formValue,
        roles: currentRoles,
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aqui va el POST
    console.log(formValue);
  };

  const viewProps = {
    formValue,
    handleInputChange,
    handleFormSubmit,
    handleCheckboxRoles,
  };

  return (
    <SignupForm {...viewProps} />
  );
}

export default Signup;
