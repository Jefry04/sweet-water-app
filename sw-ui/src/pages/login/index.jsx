import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import LoginFormView from "./LoginFormView";
import { UserContext } from "context/UserContext";
import { useForm } from "hooks/useForm";
import { useFormValidation } from "hooks/useFormValidation";
import { authUser } from "lib/services/auth";
import { getErrorMessage } from "lib/getErrorMessage";
import { ROLES } from "lib/constants";

const LoginForm = () => {
  const [isAuthError, setIsAuthError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValue, handleInputChange] = useForm({ username: "", password: "" });
  const { isValid, setValidObj } = useFormValidation({ username: false, password: false });
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formValue;
    authUser(username, password).then((data) => {
      if (data.success === true) {
        setUser({ ...data.user, isAdmin: data.user.roles.includes(ROLES.ADMIN) });
        router.push("/");
      } else {
        setIsAuthError(true);
        setErrorMessage(getErrorMessage(data.errMsg));
      }
    });
  };

  const loginViewProps = {
    formValue,
    handleChange: handleInputChange,
    handleSubmit,
    isAuthError,
    errorMessage,
    isValid,
    cbValid: setValidObj,
  };
  return <LoginFormView {...loginViewProps} />;
};

export default LoginForm;
