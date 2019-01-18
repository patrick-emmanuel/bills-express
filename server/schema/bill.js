import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    bills(cursor: String, limit: Int): BillConnection!
    bill(id: ID!): Bill
  }

  extend type Mutation {
    createBill(
      amount: Int!
      date: Date!
      type: TypeEnum!
    ): Bill!
  }

  extend type Mutation {
    payBill(id: ID!): Bill!
  }

  type BillConnection {
    edges: [Bill!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  extend type Subscription {
    billCreated: BillCreated!
  }

  extend type Subscription {
    billPaid(id ID!): Bill!
  }

  type BillCreated {
    bill: Bill!
  }

  type Bill {
    id: ID!
    amount: Int!
    date: String!
    type: TypeEnum!
    paid: Boolean!
  }

  enum TypeEnum {
    ELECTRICITY,
    WASTE,
    WATER,
    INTERNET
  }
`;
