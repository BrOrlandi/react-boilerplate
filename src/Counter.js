import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 500);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2 className="counter">Counter: {this.state.counter}</h2>;
  }
}
