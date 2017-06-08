import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

function Stats (props) {
  // Immutable.List.size === Array.length
  const totalPlayers = props.players.size;

  // Starting index for reduce
  const index = 0;
  const totalScore = props.players.reduce((accumulator, player) => accumulator + player.get('score'), index);

  return (
    <table className='stats'>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: PropTypes.instanceOf(List).isRequired
};

export default Stats;
