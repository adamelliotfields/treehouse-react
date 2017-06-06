import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter.jsx';

function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        {props.name}
      </div>
      <div className='player-sore'>
        <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Player;
