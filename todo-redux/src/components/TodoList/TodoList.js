import React, { PureComponent } from 'react';
import { arrayOf, shape, number, bool, string } from 'prop-types';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem';

class TodoList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({id: number, text: string, completed: bool})),
  };

  // shouldComponentUpdate(nextProps) {
  //   return this.props.todos !== nextProps.todos;
  // }

  render() {
    console.log('render TodoList');
    const todoItems = this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)

    return (
      <div className="TodoList">
        {todoItems}
      </div>
    );
  }
}


export {
  TodoList,
};
