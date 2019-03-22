import React, { Component, ChangeEvent, FormEvent } from "react";

class TodoForm extends Component {
  constructor(public props: { saisie: string, onChange: (saisie: string) => void, onAdd: () => void }) {
    super(props);
  }
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onAdd();
  };
  render() {
    const {saisie, onChange, onAdd} = this.props;
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input type="checkbox" />
        <input type="text" value={saisie} onChange={(event) => onChange(event.target.value)} />
        <button>+</button>
      </form>
    );
  }
}

export { TodoForm };
