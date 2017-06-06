import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Player from './Player.jsx';

function Application (props) {
  return (
    <div className='scoreboard'>
      <Header title={props.title} />
      <div className='players'>
        {props.players.map((player, index) => <Player key={`key-${index + 1}`} name={player.name} score={player.score} />)}
      </div>
    </div>
  );
}

Application.defaultProps = {
  title: 'Scoreboard'
};

Application.propTypes = {
  title: PropTypes.string,

  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })).isRequired
};

export default Application;
