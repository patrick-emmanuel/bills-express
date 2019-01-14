import gql from 'graphql-tag';

export const GET_PAGINATED_BILLS = gql`
  query($cursor: String, $limit: Int!) {
    bills(cursor: $cursor, limit: $limit)
      @connection(key: "BillConnection") {
      edges {
        id
        type
        amount
        date
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;