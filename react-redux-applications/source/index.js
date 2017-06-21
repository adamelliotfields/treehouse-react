import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './css/main.css';

import PlayerReducer from './js/reducers/player.js';
import Scoreboard from './js/containers/Scoreboard.jsx';

const store = createStore(PlayerReducer, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
);
