import React, { Component } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

class App extends Component {
  state = {
    saisie: "Achete",
    todos: [
      {
        text: "Acheter du pain",
        completed: false,
        id: 1
      },
      {
        text: "Introduction à React",
        completed: true,
        id: 2
      }
    ]
  };

  handleChange = (saisie: string) => {
    this.setState({
      saisie
    });
  };

  handleAdd = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: this.state.saisie, completed: false, id: Math.random() }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          saisie={this.state.saisie}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
        <TodoList items={this.state.todos} />
      </div>
    );
  }
}

export default App;
