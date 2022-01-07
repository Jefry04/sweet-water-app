import React, { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import { useForm } from "hooks/useForm";
import { register } from "lib/services/auth";
import { useFormValidation } from "hooks/useFormValidation";
import { getErrorMessage } from "lib/getErrorMessage";

function Signup() {
  const [isSignupError, setIsSignupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValue, handleInputChange, setFormValue, resetFormValue] = useForm({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    roles: [],
  });
  const { setValidObj, isValid, resetFormValidation } = useFormValidation({
    username: false,
    firstName: false,
    lastName: false,
    password: false,
    roles: false,
  });

  useEffect(() => {
    if (formValue.roles.length > 0) {
      setValidObj({ roles: true });
    } else {
      setValidObj({ roles: false });
    }
  }, [formValue.roles, setValidObj]);

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
    register(formValue)
      .then((res) => {
        if (res.success) {
          setIsSignupError(false);
          resetFormValidation();
          resetFormValue();
        } else {
          setIsSignupError(true);
          setErrorMessage(getErrorMessage(res.errMsg));
        }
      })
      .catch(console.error);
  };

  const viewProps = {
    errorMessage,
    formValue,
    handleCheckboxRoles,
    handleFormSubmit,
    handleInputChange,
    isValid,
    signupError: isSignupError,
    validCb: setValidObj,
  };

  return <SignupForm {...viewProps} />;
}

export default Signup;
