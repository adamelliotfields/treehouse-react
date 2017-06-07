import React from 'react';
import PropTypes from 'prop-types';

function Stats (props) {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((accumulator, player) => accumulator + player.score, 0);

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
  players: PropTypes.array.isRequired
};

export default Stats;
