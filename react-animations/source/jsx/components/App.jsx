import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { List } from 'immutable';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { names: this.props.names };
  }
  handleChange (event) {
    if (event.key === 'Enter') {
      this.setState({ names: this.state.names.push({ name: event.target.value }) });
      event.target.value = '';
    }
  }
  handleRemove (index) {
    this.setState({ names: this.state.names.delete(index) });
  }
  shouldComponentUpdate () {
    if (this.state !== this.prevState) return true;
  }
  render () {
    return (
      <div className='guest-list'>
        <h1>Guest List</h1>
        <input type='text' placeholder='Invite Someone' value={this.state.newName} onKeyDown={this.handleChange} />
        <CSSTransitionGroup
          component='ul'
          transitionName='slide'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
          transitionAppear>

          {this.state.names.map((name, index) => {
            return (
              <li key={index}>
                {name.name}
                <button onClick={() => this.handleRemove(index)}>Remove</button>
              </li>
            );
          })}

        </CSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  names: PropTypes.instanceOf(List).isRequired
};

export default App;
