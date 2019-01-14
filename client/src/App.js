import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import CreateBill from './bills/CreateBill';
import BillDetails from './bills/BillDetails';
import BillList from './bills/ListBills';

import { PrivateRoute } from './utils/auth';

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true,
  },
});

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(
    ({
      headers = {},
      localToken = localStorage.getItem('token'),
    }) => {
      if (localToken) {
        headers['authorization'] = localToken;
      }
      return {
        headers,
      };
    },
  );

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log('GraphQL error', message);

      if (message === 'NOT_AUTHENTICATED') {
        //signOut(client);
      }
    });
  }

  if (networkError) {
    console.log('Network error', networkError);

    if (networkError.statusCode === 401) {
      //signOut(client);
    }
  }
});

const link = ApolloLink.from([authLink, errorLink, terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <PrivateRoute exact path="/bills/create" component={CreateBill} />
            <PrivateRoute exact path="/bills" component={BillList} />
            <PrivateRoute exact path="/bills/:id" component={BillDetails} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
