import React from 'react';
import { Mutation } from "react-apollo";
import SignUpForm from './signUpForm';
import { setAuthToken } from '../../utils/auth';
import { SIGN_UP } from './queries';

import './signUpForm';

const SignUp = ({ history }) => {

  const onCompleted = data => {
    setAuthToken(data.signUp.token);
    history.push('/');
  }

  //Work on error messages.
  const onError = error => {
    return (
      <div>Error! {error.message}</div>
    )
  }

  return (
    <Mutation
      mutation={SIGN_UP}
      onCompleted={onCompleted}
      onError={onError}>
      {(signUp, { data }) => {
        return (
          <SignUpForm signUp={signUp} />
        );
      }}
    </Mutation>
  );
};

export default SignUp;