import gql from 'graphql-tag';

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