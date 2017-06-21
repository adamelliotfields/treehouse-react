import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter.jsx';

const Player = ({selectPlayer, removePlayer, index, name, updatePlayerScore, score}) => (
  <div className='player'>
    <div className='player-name' onClick={() => selectPlayer(index)}>
      <a className='remove-player' onClick={() => removePlayer(index)}>✖</a>
      {name}
    </div>
    <div className='player-score'>
      <Counter index={index} updatePlayerScore={updatePlayerScore} score={score} />
    </div>
  </div>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  selectPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired
};

export default Player;
