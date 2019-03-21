import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="Counter">
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}

export { Counter };
