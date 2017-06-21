import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats.jsx';
import Stopwatch from './Stopwatch.jsx';

const Header = ({players}) => (
  <div className='header'>
    <Stats players={players} />
    <h1>Scoreboard</h1>
    <Stopwatch />
  </div>
);

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
