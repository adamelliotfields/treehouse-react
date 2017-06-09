import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';

import App from './containers/App.jsx';

const Props = {
  username: 'adamelliotfields',
  results: 5,
  token: '8b618edb824e5905b64b0f67e7b5e20989b1333e'
};

render(
  <App {...Props} />,
  document.getElementById('root')
);
