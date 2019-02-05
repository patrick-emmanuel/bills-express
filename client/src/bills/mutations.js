import gql from 'graphql-tag';

export const CREATE_BILL = gql`
  mutation createBill($type: TypeEnum!, $date: Date!, $amount: Int!){
    createBill(type: $type, date: $date, amount: $amount){
      id
      paid
      date
      type
      amount
    }
  }
`;

export const PAY_BILL = gql`
  mutation payBill($id: ID!){
    payBill(id: $id){
      id
      paid
    }
  }
`;