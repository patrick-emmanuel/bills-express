import React from 'react'
import { Query } from 'react-apollo';
import { GET_BILL } from './queries';

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
          <div>
            <p>{data.bill.type}</p>
            <p>{data.bill.amount}</p>
            <p>{data.bill.date}</p>
          </div>
        );
      }}
    </Query>
  );
}
