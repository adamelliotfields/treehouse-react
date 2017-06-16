import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor (props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: '', topic: '' };
  }
  handleNameChange (event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }
  handleTopicChange (event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }
  handleSubmit (e) {
    const { name, topic } = this.state;
    const { submit } = this.props;

    e.preventDefault();
    submit(name, topic);
  }
  render () {
    const { handleNameChange, handleTopicChange, handleSubmit } = this;
    const { name, topic } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' name='name' value={name} onChange={handleNameChange} />
        <input type='text' placeholder='Topic' name='topic' value={topic} onChange={handleTopicChange} />
        <button type='submit'>Go!</button>
      </form>
    );
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Form;
