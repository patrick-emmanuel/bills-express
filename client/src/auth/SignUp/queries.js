import gql from "graphql-tag";


export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
    }
  }
`;
