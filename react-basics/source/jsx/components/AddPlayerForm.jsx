import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit (event) {
    event.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: '' });
  }
  render () {
    return (
      <div className='add-player-form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleNameChange} />
          <input type='submit' value='Add Player' />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerForm;
