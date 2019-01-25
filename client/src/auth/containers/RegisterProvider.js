import React from 'react';
import { Mutation } from "react-apollo";
import { REGISTER } from '../queries';

export default ({ children, onCompleted, onError }) => {
  return (
    <Mutation
      mutation={REGISTER}
      onCompleted={onCompleted}
      onError={onError}>
      {(mutate, { data, loading, error }) => (
        children({ mutate, data, loading, error })
      )}
    </Mutation>
  )
};
