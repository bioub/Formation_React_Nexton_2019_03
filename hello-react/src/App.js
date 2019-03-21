import React, { Component } from 'react';
import { Hello } from './Hello';
import { Clock } from './Clock';
import { Counter } from './Counter';
import { Login } from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Romain" />
        <Clock />
        <Counter />
        <Login />
      </div>
    );
  }
}

export { App };
