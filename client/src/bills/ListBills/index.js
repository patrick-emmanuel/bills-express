import React from 'react';
import { Query } from 'react-apollo';

import BillsList from './BillList';
import { GET_PAGINATED_BILLS } from '../queries';
import MoreButton from '../../components/MoreButton';

export default () => {
  const limit = 3
  return (
    <Query
      variables={{ limit }}
      query={GET_PAGINATED_BILLS}>
      {({ loading, error, data, fetchMore, subscribeToMore }) => {
        if (loading) return 'loading...';
        if (error) return `${error}`;

        const { edges, pageInfo } = data.bills;

        return (
          <>
            <BillsList bills={edges} />
            {pageInfo.hasNextPage && (
              <MoreButton
                limit={limit}
                pageInfo={pageInfo}
                fetchMore={fetchMore}>More</MoreButton>
            )}
          </>
        )
      }}
    </Query>
  )
}