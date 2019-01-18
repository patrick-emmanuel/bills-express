import React from 'react';

const MoreButton = ({
  limit,
  pageInfo,
  fetchMore,
  children,
}) => (
    <div className="flex justify-center items-center mb-5">
      <button className="bg-teal rounded py-3 font-bold px-8 text-white"
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
    </div>
  );


export default MoreButton;