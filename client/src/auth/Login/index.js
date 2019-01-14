import React from 'react';
import { Mutation } from "react-apollo";
import LoginForm from './loginForm';
import { setAuthToken } from '../../utils/auth';
import { LOGIN } from './queries';

import './login.css';

const Login = ({ history }) => {

  const onCompleted = data => {
    setAuthToken(data.signIn.token);
    history.push('/');
  }

  const onError = error => {
    return (
      <div>Error! {error.message}</div>
    )
  }

  return (
    <Mutation
      mutation={LOGIN}
      onCompleted={onCompleted}
      onError={onError}>
      {(login) => {
        return (
          <LoginForm login={login} />
        );
      }}
    </Mutation>
  );
};

export default Login;