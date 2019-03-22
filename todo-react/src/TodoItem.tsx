import React, { Component } from "react";
import { Todo } from "./Todo.interface";

class TodoItem extends Component {
  constructor(public props: { item: Todo }) {
    super(props);
  }
  render() {
    const { item } = this.props;
    return (
      <div className="TodoItem">
        <input
          type="checkbox"
          name="completed"
          defaultChecked={item.completed}
        />
        <input type="text" name="text" defaultValue={item.text} />
        <button>-</button>
      </div>
    );
  }
}

export { TodoItem };
