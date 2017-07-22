import express from 'express';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { ApolloClient, ApolloProvider, renderToStringWithData } from 'react-apollo';
import fetch from 'isomorphic-fetch';
import Routes from '../client/Routes';
import createNetworkInterface from '../helpers/createNetworkInterface';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, '../../views'));

app.get('*', (req, res) => {
  const context = {};
  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }
  const client = new ApolloClient({
    ssr: true,
    networkInterface: createNetworkInterface,
  });

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </ApolloProvider>
  );

  return renderToStringWithData(component).then((html) => {
    const status = 200;
    const helmet = Helmet.renderStatic();
    return res.status(status).render('index', { html, helmet });
  }).catch((error) => {
    console.error(error);
  });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`);
});
