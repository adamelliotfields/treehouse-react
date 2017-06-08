import React from 'react';
import { List, Map } from 'immutable';
import { render } from 'react-dom';
import Application from './components/Application.jsx';

const initialPlayers = List.of(
  Map({ name: 'Adam Fields', score: 0 }),
  Map({ name: 'Jim Hoskins', score: 0 })
);

render(
  <Application title='Scoreboard' initialPlayers={initialPlayers} />,
  document.getElementById('root')
);
