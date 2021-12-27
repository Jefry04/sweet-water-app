import React, { useState, useEffect } from "react";
import { authUser } from "../../lib/auth";
import LoginFormView from "./LoginFormView";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [value, setValue] = useState({ username: "", password: "" });
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [focused, setFocused] = useState(false);

  const router = useRouter();
  const { username, password } = value;

  useEffect(() => {
    if (isAuthenticate) {
      router.push("/");
    }
  }, [isAuthenticate]);

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setIsEmpty(false);
      setIsAuthError(false);
    } else {
      setIsEmpty(true);
    }
  }, [value]);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = value;
    authUser(username, password).then((data) => {
      console.log(data);
      if (data.success === true) {
        setIsAuthenticate(true);
      } else {
        setIsAuthError(true);
      }
    });
  };

  return (
    <LoginFormView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEmpty={isEmpty}
      isAuthError={isAuthError}
      focused={focused}
      handleFocus={handleFocus}
    />
  );
};

export default LoginForm;
