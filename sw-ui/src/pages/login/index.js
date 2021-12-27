import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoginFormView from './LoginFormView';


const Login = () => {
  const [value, setValue] = useState({ username: '', password: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [focused, setFocused] = useState(false);

  const router = useRouter();
  const { username, password } = value;

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

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
    if (username === 'admin' && password === 'admin')
      //    authUser(username, password); //enviar peticion al back
      setIsAuthenticated(true);
    else {
      setIsAuthError(true);
    }
  };

  return (
    <div className='login-page'>
      <LoginFormView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEmpty={isEmpty}
        isAuthError={isAuthError}
        focused={focused}
        handleFocus={handleFocus}
      />
    </div>
  );
};

export default Login;
