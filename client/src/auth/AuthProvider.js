import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginProvider from './Login/LoginProvider';
import { setAuthToken, removeAuthToken } from '../utils/auth';
import RegisterProvider from './Register/RegisterProvider';

export const AuthContext = React.createContext({
  login: null,
  logout: null,
  register: null,
  loginLoading: false,
  registerLoading: false,
  me: null
});


const AuthProviderOperations = ({ children, history }) => {

  const onCompleted = data => {
    setAuthToken(data.signIn.token);
    history.push('/');
  }

  return (
    <LoginProvider onCompleted={onCompleted}>
      {login => (
        <RegisterProvider onRegisterCompleted={onCompleted}>
          {register => (
            <AuthProvider
              login={login}
              register={register}>
              {children}
            </AuthProvider>
          )}
        </RegisterProvider>
      )}
    </LoginProvider>
  )
}

const AuthProvider = ({ login, register, children }) => {

  const logout = () => {
    removeAuthToken();
  }

  return (
    <AuthContext.Provider value={{
      login: login.mutate,
      register: register.mutate,
      loginLoading: login.loading,
      registerLoading: register.loading,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default withRouter(AuthProviderOperations);