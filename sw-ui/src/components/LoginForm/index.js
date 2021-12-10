import React, { useState } from "react";
import { authUser } from "../../lib/auth";
import LoginFormView from "./LoginFormView";

const LoginForm = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = value;
    console.log("usuario:" + username + "password  " + password);
    authUser(username, password);
  };

  return (
    <LoginFormView 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
    />
  );
};

export default LoginForm;

