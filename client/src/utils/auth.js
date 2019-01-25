import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';


export const setAuthToken = token => {
  localStorage.setItem('token', token);
}

export const removeAuthToken = () => {
  localStorage.removeItem('token');
}

export const getToken = () => {
  return localStorage.getItem('token');
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <>
            <NavBar />
            <div className="mt-10 md:mx-64 sm:mx-16 mx-6">
              <Component {...props} />
            </div>
          </>
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
