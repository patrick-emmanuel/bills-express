import React from 'react';
import { Query } from 'react-apollo';

import BillsList from './BillList';
import { GET_PAGINATED_BILLS } from './queries';

export default () => {
  const limit = 10
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
            {
              pageInfo.hasNextPage && (
                <MoreBillsButton
                  limit={limit}
                  pageInfo={pageInfo}
                  fetchMore={fetchMore} />)}
          </>
        )
      }}
    </Query>
  )
}


const MoreBillsButton = ({
  limit,
  pageInfo,
  fetchMore,
  children,
}) => (
    <button
      type="button"
      onClick={() =>
        fetchMore({
          variables: {
            cursor: pageInfo.endCursor,
            limit,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }

            return {
              bills: {
                ...fetchMoreResult.bills,
                edges: [
                  ...previousResult.bills.edges,
                  ...fetchMoreResult.bills.edges,
                ],
              },
            };
          },
        })
      }
    >
      {children}
    </button>
  );