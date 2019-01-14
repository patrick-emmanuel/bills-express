import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';

import { isAdmin, isAuthenticated } from './authorization';

const createToken = async (user, secret, expiresIn) => {
  const { id, email, role } = user;
  return await jwt.sign({ id, email, role }, secret, {
    expiresIn,
  });
};

export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findById(id);
    },
    me: async (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }

      return await models.User.findById(me.id);
    },
  },

  Mutation: {
    signUp: async (
      parent,
      { email, password },
      { models, secret },
    ) => {
      const user = await models.User.create({
        email,
        password,
      });

      return { token: createToken(user, secret, '1d') };
    },

    signIn: async (
      parent,
      { login, password },
      { models, secret },
    ) => {

      const user = await models.User.findOne({ where: { email: login } })

      if (!user) {
        throw new UserInputError(
          'No user found with this login credentials.',
        );
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError('Invalid password.');
      }

      return { token: createToken(user, secret, '1d') };
    },

    updateUser: combineResolvers(
      isAuthenticated,
      async (parent, { email }, { models, me }) => {
        const user = await models.User.findById(me.id);
        return await user.update({ email });
      },
    ),

    deleteUser: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => {
        return await models.User.destroy({
          where: { id },
        });
      },
    ),
  },

  User: {
    bills: async (user, args, { models }) => {
      return await models.Bill.findAll({
        where: {
          userId: user.id,
        },
      });
    },
  },
};
