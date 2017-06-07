import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter.jsx';

function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        {/* Unicode U+1F5D9 === 🗙 === HTML &#x1F5D9; */}
        <a className='remove-player' onClick={props.removePlayer}>&#x1F5D9;</a>
        {props.name}
      </div>
      <div className='player-sore'>
        <Counter score={props.score} changeScore={props.changeScore} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired
};

export default Player;
