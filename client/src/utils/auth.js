import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const setAuthToken = token => {
  localStorage.setItem('token', token);
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
