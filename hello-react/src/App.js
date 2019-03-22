import React, { Component } from "react";
import { Hello } from "./Hello";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { Accordion } from "./Accordion";

class App extends Component {
  state = {
    prenom: "Romain",
    opened: true,
  };
  handleSelected = (selected) => {
    this.setState({
      prenom: selected,
    });
  }
  handleToggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  }
  render() {
    return (
      <div className="App">
        <Hello name={this.state.prenom} />
        <Clock />
        <Counter />
        <Login />
        <Accordion
          onToggle={this.handleToggle}
          onSelected={this.handleSelected}
          selected={this.state.prenom}
          title={"Prénoms"}
          items={["Romain", "Jean", "Eric"]}
          opened={this.state.opened}
        />
      </div>
    );
  }
}

export { App };
