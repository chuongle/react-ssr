import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { ApolloClient, createNetworkInterface, ApolloProvider, renderToStringWithData, getDataFromTree } from 'react-apollo';
import fetch from 'node-fetch';
import Routes from '../client/Routes';

global.fetch = fetch;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, '../../views'));

app.get('*', (req, res) => {
  const context = {};
  
  // const html = renderToString(
  //   <StaticRouter location={req.url} context={context}>
  //     <Routes />
  //   </StaticRouter>);
  // const helmet = Helmet.renderStatic();

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'http://headless.docker.localhost/graphql',
      opts: {
        credentials: 'same-origin',
      },
    }),
  });

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </ApolloProvider>
  );

  renderToStringWithData(component).then((html) => {
    // const state = client.store.getState().apollo.data;
  //   // TODO manage 404
    const status = 200; // or 404 is specific condition is met
    return res.status(status).render('index', { html });
  }).catch((error) => {
    console.error(error);
  });

  // const status = 200; // or 404 is specific condition is met
  // return res.status(status).render('index', { html, helmet });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`);
});
