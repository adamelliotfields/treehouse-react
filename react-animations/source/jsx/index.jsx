import React from 'react';
import { List } from 'immutable';
import { render } from 'react-dom';

import App from './components/App.jsx';

const names = List.of(
  { name: 'Joel' },
  { name: 'Alena' },
  { name: 'Andrew' },
  { name: 'Thera' }
);

render(
  <App names={names} />,
  document.getElementById('root')
);
