import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Player from './Player.jsx';
import AddPlayerForm from './AddPlayerForm.jsx';

class Application extends Component {
  constructor (props) {
    super(props);
    this.state = { initialPlayers: this.props.initialPlayers };
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }
  handleRemovePlayer (index) {
    this.state.initialPlayers.splice(index, 1);
    this.setState(this.state);
  }
  handleChangeScore (index, delta) {
    this.state.initialPlayers[index].score += delta;
    this.setState(this.state);
  }
  handleAddPlayer (name) {
    this.state.initialPlayers.push({
      name: name,
      score: 0
    });
    this.setState(this.state);
  }
  render () {
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} players={this.state.initialPlayers} />
        <div className='players'>
          {this.state.initialPlayers.map((player, index) => {
            return (
              <Player
                key={`key-${index + 1}`}
                name={player.name}
                score={player.score}
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

  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })).isRequired
};

export default Application;
