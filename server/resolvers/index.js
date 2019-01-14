import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import billResolvers from './bill';

export const toCursorHash = string => Buffer.from(string).toString('base64');

export const fromCursorHash = string =>
  Buffer.from(string, 'base64').toString('ascii');

export const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  billResolvers
];
