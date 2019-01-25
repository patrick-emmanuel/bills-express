import React from 'react';
import { AuthContext } from '../../auth/AuthProvider';
import Nav from './Nav';

export default () => {
  return (
    <AuthContext.Consumer>
      {({ me, logout, verifyAuthLoading }) => {
        if (!verifyAuthLoading && me) {
          return (
            <Nav
              me={me}
              logout={logout}
            />
          )
        }
      }}
    </AuthContext.Consumer>
  );
}
