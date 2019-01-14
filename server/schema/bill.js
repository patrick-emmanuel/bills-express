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

  type BillConnection {
    edges: [Bill!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type Bill {
    id: ID!
    amount: Int!
    date: String!
    type: TypeEnum!
  }

  enum TypeEnum {
    ELECTRICITY,
    WASTE,
    WATER,
    INTERNET
  }

  extend type Subscription {
    billCreated: BillCreated!
  }

  type BillCreated {
    bill: Bill!
  }
`;
