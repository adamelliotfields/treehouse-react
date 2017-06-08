import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import Stats from './Stats.jsx';
import Stopwatch from './Stopwatch.jsx';

function Header (props) {
  return (
    <div className='header'>
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.instanceOf(List).isRequired
};

export default Header;
