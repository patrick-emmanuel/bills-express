import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import LoginProvider from './containers/LoginProvider';
import RegisterProvider from './containers/RegisterProvider';
import VerifyTokenProvider from './containers/VerifyTokenProvider';

import {
  setAuthToken,
  removeAuthToken,
  getToken
} from '../utils/auth';

export const AuthContext = React.createContext({
  login: null,
  logout: null,
  register: null,
  loginLoading: false,
  registerLoading: false,
  me: null
});


const AuthProviderOperations = ({ children, history }) => {

  const [me, setMe] = useState(null);

  const onCompleted = data => {
    const { me: loggedInUser, token } = data.signIn;
    setAuthToken(token);
    setMe(loggedInUser);
    history.push('/');
  }

  const onError = () => {
    logout();
  }

  const logout = () => {
    removeAuthToken();
    history.push('/login');
  }

  return (
    <LoginProvider onCompleted={onCompleted} onError={onError}>
      {login => (
        <RegisterProvider onRegisterCompleted={onCompleted} onError={onError}>
          {register => (
            <VerifyTokenProvider onError={onError}>
              {verifyUser => (
                <AuthProvider
                  logout={logout}
                  login={login}
                  register={register}
                  verifyUser={verifyUser}
                  setMe={setMe}
                  me={me}>
                  {children}
                </AuthProvider>
              )}
            </VerifyTokenProvider>
          )}
        </RegisterProvider>
      )}
    </LoginProvider>
  )
}

const AuthProvider = ({
  login,
  logout,
  register,
  verifyUser,
  me,
  setMe,
  children
}) => {

  useEffect(() => {
    const token = getToken();
    if (verifyUser.data && verifyUser.data.verifyUser) {
      setMe(verifyUser.data.verifyUser)
    }
    const userToken = login.data ? login.data.signIn.token : token
    if (userToken && !me) {
      verifyUser.mutate({ variables: { token: userToken } });
    }
  });

  return (
    <AuthContext.Provider value={{
      login: login.mutate,
      register: register.mutate,
      loginLoading: login.loading,
      registerLoading: register.loading,
      verifyAuthLoading: verifyUser.loading,
      me,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default withRouter(AuthProviderOperations);