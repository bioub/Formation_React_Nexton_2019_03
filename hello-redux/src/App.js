import React, { Component } from 'react';
import './App.css';
import { Counter, CounterContainer } from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h2>Counter (non-connectés)</h2>
        <Counter />
        <Counter /> */}
        <h2>Counter (connectés)</h2>
        <CounterContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
