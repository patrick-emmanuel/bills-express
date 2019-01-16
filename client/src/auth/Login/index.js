import React from 'react';
import LoginForm from './LoginForm';
import { AuthContext } from '../AuthProvider';
import './login.css';

const Login = () => {

  return (
    <AuthContext.Consumer>
      {({ login, loginLoading }) => (
        <LoginForm
          login={login}
          loading={loginLoading} />
      )}
    </AuthContext.Consumer>
  )
};

export default Login;