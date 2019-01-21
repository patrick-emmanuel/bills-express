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

export const PAY_BILL = gql`
  mutation payBill($id: ID!){
    payBill(id: $id){
      paid
    }
  }
`;

export const PAY_BILL_SUBSCRIPTION = gql`
  subscription billPaid {
    billPaid{
      paid
    }
  }
`;
