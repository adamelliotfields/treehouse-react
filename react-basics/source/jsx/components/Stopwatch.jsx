import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor () {
    super();
    this.state = { running: false, time: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.tick = this.tick.bind(this);
  }
  handleClick () {
    this.setState(({running}) => ({ running: !running }));
  }
  handleReset () {
    this.setState({ running: false, time: 0 });
  }
  tick () {
    if (this.state.running) this.setState(({time}) => ({ time: (time += 1) }));
  }
  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render () {
    const button = this.state.running ? 'Stop' : 'Start';
    const time = this.state.time;

    return (
      <div className='stopwatch'>
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'>{time}</div>
        <button onClick={this.handleClick}>{button}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
