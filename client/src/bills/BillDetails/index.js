import React from 'react'
import { Query } from 'react-apollo';
import { GET_BILL } from '../queries';
import BillDetails from './BillDetails';

export default ({ match }) => {
  let id = decodeURIComponent(match.params.id);

  return (
    <Query
      query={GET_BILL}
      variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading...'
        if (error) return `${error}`
        return (
          <BillDetails bill={data.bill} />
        );
      }}
    </Query>
  );
}
