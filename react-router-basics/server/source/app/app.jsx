import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Main from '../../../client/source/jsx/containers/Main.jsx';

const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use('/', express.static(path.join('client', 'build')));

app.set('view engine', 'ejs');
app.set('views', './server/build/views');

app.get('*', (request, response) => {
  const context = {};

  const main = ReactDOM.renderToString(
    <StaticRouter location={request.url} context={context}>
      <Main />
    </StaticRouter>
  );

  response.render('index', { main: main });
});

module.exports = app;
