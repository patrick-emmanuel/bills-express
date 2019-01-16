import React from 'react';
import RegisterForm from './RegisterForm';
import { AuthContext } from '../AuthProvider';
import './RegisterForm';

const SignUp = () => {

  return (
    <AuthContext.Consumer>
      {({ register, registerLoading }) => (
        <RegisterForm
          register={register}
          registerLoading={registerLoading} />
      )}
    </AuthContext.Consumer>
  )
};

export default SignUp;