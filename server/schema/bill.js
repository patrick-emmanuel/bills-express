import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    bills(cursor: String, limit: Int): BillConnection!
    bill(id: ID!): Bill
    billsGroupByType: BillGroupByTypeConnection!
    billsGroupByPaid: BillGroupByPaidConnection!
  }

  extend type Mutation {
    createBill(
      amount: Int!
      date: Date!
      type: TypeEnum!
    ): Bill!
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
    billPaid: Bill!
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

  type BillGroupByPaidConnection{
    edges: [BillGroupByPaid!]!
  }

  type BillGroupByPaid {
    total: Int!
    paid: Boolean!
  }

  type BillGroupByTypeConnection{
    edges: [BillGroupByType!]!
  }

  type BillGroupByType {
    total: Int!
    type: TypeEnum!
  }

  enum TypeEnum {
    ELECTRICITY,
    WASTE,
    WATER,
    INTERNET
  }
`;
