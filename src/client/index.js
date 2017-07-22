import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import Routes from './Routes';
import createNetworkInterface from '../helpers/createNetworkInterface';

const client = new ApolloClient({
  networkInterface: createNetworkInterface,
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>,
document.getElementById('app'));
