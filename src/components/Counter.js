import React from 'react'
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
         <button  onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button  onClick={() => this.reset()}>Reset</button>
        <h2>Current Count: {this.state.count}</h2>
      </div>
    );
  }
};