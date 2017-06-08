import React from 'react';
import { List, Map } from 'immutable';
import { render } from 'react-dom';

import App from './components/App.jsx';

const initialNames = List.of(
  Map({ name: 'Joel' }),
  Map({ name: 'Alena' }),
  Map({ name: 'Andrew' }),
  Map({ name: 'Thera' })
);

render(
  <App initialNames={initialNames} />,
  document.getElementById('root')
);
