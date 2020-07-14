import React, {Component} from 'react'
export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
         <button  onClick={() => this.increment()}>Increment</button>
        <h2>Current Count: {this.state.count}</h2>
      </div>
    );
  }
};