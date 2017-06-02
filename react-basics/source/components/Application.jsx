import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Application extends Component {
  render () {
    return (
      <div className='application'>
        <div className='header'>
          <h1 className='scoreboard'>{this.props.title}</h1>
        </div>
        <div className='players'>
          <div className='player'>
            <div className='player-name'>
              Adam Fields
            </div>
            <div className='player-sore'>
              <div className='counter'>
                <button className='counter-action decrement'>-</button>
                <div className='counter-score'>100</div>
                <button className='counter-action increment'>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  title: PropTypes.string.isRequired
};

export default Application;
