import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';

import '../css/main.css';

import App from './containers/App.jsx';

const props = {
  username: 'adamelliotfields',
  results: 5,
  token: ''
};

render(
  <App {...props} />,
  document.getElementById('root')
);
