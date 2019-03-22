import React, { Component } from "react";
import { Todo } from "./Todo.interface";
import { TodoItem } from "./TodoItem";

class TodoList extends Component {
  constructor(public props: { items: Todo[] }) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <div className="TodoList">
        {items.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export { TodoList };
