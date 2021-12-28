import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { authUser } from "lib/auth";
import { UserContext } from "context/UserContext";
import LoginFormView from "./LoginFormView";

const LoginForm = () => {
  const [value, setValue] = useState({ username: "", password: "" });
  const [isAuthError, setIsAuthError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [focused, setFocused] = useState(false);
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const { username, password } = value;

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
      if (data.success === true) {
        setUser({ username: data.username });
        router.push("/");
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
