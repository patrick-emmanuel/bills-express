import React from 'react';
import { Mutation } from "react-apollo";
import { LOGIN } from '../queries';

export default ({ children, onCompleted, onError }) => {
  return (
    <Mutation
      mutation={LOGIN}
      onCompleted={onCompleted}
      onError={onError}>
      {(mutate, { data, loading, error }) => (
        children({ mutate, data, loading, error })
      )}
    </Mutation>
  )
};
