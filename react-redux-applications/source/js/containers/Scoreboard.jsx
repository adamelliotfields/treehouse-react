import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header.jsx';
import Player from '../components/Player.jsx';
import PlayerForm from '../components/PlayerForm.jsx';
import PlayerDetail from '../components/PlayerDetail.jsx';

import * as PlayerActionCreators from '../actions/player.js';

class Scoreboard extends PureComponent {
  static propTypes = {
    players: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedPlayerIndex: PropTypes.number.isRequired
  };
  render () {
    const { dispatch, players, selectedPlayerIndex } = this.props;

    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    let selectedPlayer;
    if (selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));

    return (
      <div className='scoreboard'>
        <Header players={players} />
        <div className='players'>
          {playerComponents}
        </div>
        <PlayerForm addPlayer={addPlayer} />
        <div className='player-detail'>
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
