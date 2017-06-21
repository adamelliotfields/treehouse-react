import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerForm extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };
  state = {
    name: ''
  };
  onNameChange = (e) => {
    const name = e.target.value;

    this.setState({ name: name });
  };
  addPlayer = (e) => {
    const name = this.state.name;

    e.preventDefault();
    this.props.addPlayer(name);
    this.setState({ name: '' });
  };
  render () {
    const { addPlayer, onNameChange } = this;
    const { name } = this.state;

    return (
      <div className='add-player-form'>
        <form onSubmit={addPlayer}>
          <input
            type='text'
            value={name}
            onChange={onNameChange}
            placeholder='Player Name'
          />
          <input type='submit' value='Add Player' />
        </form>
      </div>
    );
  }
}

export default PlayerForm;
