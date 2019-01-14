import gql from 'graphql-tag';

export const CREATE_BILL = gql`
  mutation createBill($type: TypeEnum!, $date: Date!, $amount: Int!){
    createBill(type: $type, date: $date, amount: $amount){
      id
      amount
    }
  }
`;
