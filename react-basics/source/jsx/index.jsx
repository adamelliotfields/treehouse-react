import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.jsx';

const PLAYERS = [
  { name: 'Adam Fields', score: 100 },
  { name: 'Jim Hoskins', score: 100 }
];

render(
  <Application title='Scoreboard' players={PLAYERS} />,
  document.getElementById('root')
);
