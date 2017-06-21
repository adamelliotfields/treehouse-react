import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    running: false,
    previouseTime: 0,
    elapsedTime: 0
  };
  onStart = () => {
    this.setState(({running, previousTime}) => ({
      running: true, previousTime: Date.now()
    }));
  };
  onStop = () => {
    this.setState(({running}) => ({
      running: false
    }));
  };
  onReset = () => {
    this.setState(({elapsedTime, previousTime}) => ({
      elapsedTime: 0,
      previousTime: Date.now()
    }));
  };
  onTick = () => {
    if (this.state.running) {
      let now = Date.now();
      this.setState(({elapsedTime, previousTime}) => ({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now()
      }));
    }
  };
  componentDidMount () {
    this.interval = setInterval(this.onTick);
  }
  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render () {
    const { onStop, onStart, onReset } = this;
    const { elapsedTime, running } = this.state;

    const seconds = Math.floor(elapsedTime / 1000);

    return (
      <div className='stopwatch' >
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'> {seconds} </div>
        {running
          ? <button onClick={onStop}>Stop</button>
          : <button onClick={onStart}>Start</button>}
        <button onClick={onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
