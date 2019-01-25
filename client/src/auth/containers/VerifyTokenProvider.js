import React from 'react';
import { Mutation } from "react-apollo";
import { VERIFY_USER_TOKEN } from '../queries';

export default ({ children, onCompleted, onError }) => {
  return (
    <Mutation
      mutation={VERIFY_USER_TOKEN}
      onCompleted={onCompleted}
      onError={onError}>
      {(mutate, { data, loading, error }) => (
        children({ mutate, data, loading, error })
      )}
    </Mutation>
  )
};
