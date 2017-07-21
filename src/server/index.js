import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, '../../views'));

app.get('*', (req, res) => {
  const context = {};


  // apollo_client = new ApolloClient({
  //   ssrMode: true,
  //   // Remember that this is the interface the SSR server will use to connect to the
  //   // API server, so we need to ensure it isn't firewalled, etc
  //   networkInterface: createNetworkInterface({
  //     uri: 'http://localhost:3010',
  //     opts: {
  //       credentials: 'same-origin',
  //       headers: {
  //         cookie: req.header('Cookie'),
  //       },
  //     },
  //   }),
  // });
  
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>);
  const helmet = Helmet.renderStatic();

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    return res.redirect(302, context.url);
  }

  // TODO manage 404
  const status = 200; // or 404 is specific condition is met
  return res.status(status).render('index', { html, helmet });
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`);
});
