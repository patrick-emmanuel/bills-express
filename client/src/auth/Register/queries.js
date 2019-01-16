import gql from "graphql-tag";


export const REGISTER = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
    }
  }
`;
