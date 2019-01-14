import { PubSub } from 'apollo-server';

import * as BILL_EVENTS from './bill';

export const EVENTS = {
  BILL: BILL_EVENTS
};

export default new PubSub();