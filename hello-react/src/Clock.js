import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    // this.props pour les props
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

export { Clock };