import React, { Component } from 'react';

class MyComponent extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to handle button click
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
