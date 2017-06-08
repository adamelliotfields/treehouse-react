import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit (event) {
    event.preventDefault();
    this.props.onAddGuest(this.state.value);
    this.setState({ value: '' });
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Invite Someone'
          value={this.state.value}
          onChange={this.handleChange} />
      </form>
    );
  }
}

Form.propTypes = {
  onAddGuest: PropTypes.func.isRequired
};

export default Form;
