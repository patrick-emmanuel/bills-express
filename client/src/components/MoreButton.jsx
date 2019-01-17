import React from 'react'

const MoreButton = ({
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


export default MoreButton;