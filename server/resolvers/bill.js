import Sequelize from 'sequelize';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from './authorization';

import pubsub, { EVENTS } from '../subscription';
import { fromCursorHash, toCursorHash } from './index';

export default {
  Query: {
    bills: async (parent, { cursor, limit = 100 }, { models, me }) => {
      const cursorOptions = cursor
        ? {
          where: {
            userId: me.id,
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
    ),
    payBill: combineResolvers(
      isAuthenticated,
      async (
        parent,
        { id },
        { models },
      ) => {
        const bill = await models.Bill.findByPk(id);
        const paidBill = await bill.update({
          paid: !bill.paid
        });
        pubsub.publish(EVENTS.BILL.PAID, {
          billPaid: { paidBill }
        })
        return paidBill;
      },
    )
  },
  Subscription: {
    billPaid: {
      subscribe: () => pubsub.asyncIterator(EVENTS.BILL.PAID),
    },
  },
}
