import React, { Component } from 'react';
import { TodoFormContainer } from '../../containers/TodoFormContainer';
import { TodoListContainer } from '../../containers/TodoListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoFormContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export {
  App,
};
