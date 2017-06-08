import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';

import Form from './Form.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleAddGuest = this.handleAddGuest.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { names: this.props.initialNames };
  }
  handleAddGuest (name) {
    this.setState(({names}) => ({
      names: names.push(Map({ name: name }))
    }));
  }
  handleRemove (index) {
    this.setState(({names}) => ({
      names: names.delete(index)
    }));
  }
  render () {
    return (
      <div className='guest-list'>
        <h1>Guest List</h1>
        <Form onAddGuest={this.handleAddGuest} />
        <CSSTransitionGroup
          component='ul'
          transitionName='slide'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
          transitionAppear
        >

          {this.state.names.map((name, index) => {
            return (
              <li key={index}>
                {name.get('name')}
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
  initialNames: PropTypes.instanceOf(List).isRequired
};

export default App;
