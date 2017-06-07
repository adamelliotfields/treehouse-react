import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.jsx';

const PLAYERS = [
  { name: 'Adam Fields', score: 0 },
  { name: 'Jim Hoskins', score: 0 }
];

render(
  <Application title='Scoreboard' initialPlayers={PLAYERS} />,
  document.getElementById('root')
);
