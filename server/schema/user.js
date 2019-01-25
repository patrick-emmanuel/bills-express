import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    signUp(
      email: String!
      password: String!
    ): Auth!
    verifyUser(token: String!): User!
    signIn(login: String!, password: String!): Auth!
    updateUser(email: String!): User!
    deleteUser(id: ID!): Boolean!
  }

  type Auth {
    token: String!
    me: User!
  }

  type User {
    id: ID!
    email: String!
    role: String
    bills: [Bill!]
  }
`;
