import gql from "graphql-tag";

export const REGISTER = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      token
      me {
        id
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation signIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
      me {
        id
        email
      }
    }
  }
`;

export const VERIFY_USER_TOKEN = gql`
  mutation verifyUser($token: String!) {
    verifyUser(token: $token) {
      id
      email
    }
  }
`;
