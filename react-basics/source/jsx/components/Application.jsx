import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';

import Header from './Header.jsx';
import Player from './Player.jsx';
import AddPlayerForm from './AddPlayerForm.jsx';

class Application extends Component {
  constructor (props) {
    super(props);
    this.state = { players: this.props.initialPlayers };
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }
  handleRemovePlayer (index) {
    this.setState(({players}) => ({
      players: players.delete(index)
    }));
  }
  handleChangeScore (index, delta) {
    this.setState(({players}) => ({
      players: players.update(index, player => player.update('score', score => score + delta))
    }));
  }
  handleAddPlayer (name) {
    this.setState(({players}) => ({
      players: players.push(Map({ name: name, score: 0 }))
    }));
  }
  render () {
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} players={this.state.players} />
        <div className='players'>
          {this.state.players.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.get('name')}
                score={player.get('score')}
                removePlayer={() => this.handleRemovePlayer(index)}
                changeScore={(delta) => this.handleChangeScore(index, delta)} />
            );
          })}
        </div>
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

Application.defaultProps = {
  title: 'Scoreboard'
};

Application.propTypes = {
  title: PropTypes.string,
  initialPlayers: PropTypes.instanceOf(List).isRequired
};

export default Application;
