import Sequelize from 'sequelize';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from './authorization';

import { fromCursorHash, toCursorHash } from './index';

export default {
  Query: {
    bills: async (parent, { cursor, limit = 100 }, { models }) => {
      const cursorOptions = cursor
        ? {
          where: {
            createdAt: {
              [Sequelize.Op.lt]: fromCursorHash(cursor),
            },
          },
        }
        : {};

      const bills = await models.Bill.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit + 1,
        ...cursorOptions,
      });
      const hasNextPage = bills.length > limit;
      const edges = hasNextPage ? bills.slice(0, -1) : bills;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(
            edges[edges.length - 1].createdAt.toString(),
          ),
        },
      };
    },
    bill: async (parent, { id }, { models }) => {
      return await models.Bill.findByPk(id);
    },
  },
  Mutation: {
    createBill: combineResolvers(
      isAuthenticated,
      async (
        parent,
        { amount, date, type },
        { models, me },
      ) => {
        const bill = await models.Bill.create({
          amount,
          date,
          type,
          userId: me.id
        });
        return bill;
      },
    )
  }
}
