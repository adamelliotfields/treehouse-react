import React from 'react';
import PropTypes from 'prop-types';

function Counter (props) {
  return (
    <div className='counter'>
      <button className='counter-action decrement' onClick={() => props.changeScore(-1)}>-</button>
      <div className='counter-score'>
        {props.score}
      </div>
      <button className='counter-action increment' onClick={() => props.changeScore(+1)}>+</button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired
};

export default Counter;
