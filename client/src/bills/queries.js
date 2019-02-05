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
        paid
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_BILL = gql`
  query getBill($id: ID!){
    bill(id: $id){
      type
      amount
      date
      paid
    }
  }
`;

export const GET_BILLS_GROUP_BY_TYPE = gql`
  query billsGroupByType {
    billsGroupByType 
    @connection(key: "BillGroupByTypeConnection") {
        edges {
          type
          total
        }
    }
  }
`;

export const GET_BILLS_GROUP_BY_PAID = gql`
  query billsGroupByType {
    billsGroupByPaid
    @connection(key: "BillGroupByPaidConnection") {
        edges {
          total
          paid
        }
    }
  }
`;


