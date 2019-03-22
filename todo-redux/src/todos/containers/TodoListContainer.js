import { connect } from "react-redux";
import { TodoList } from "../todos/components/TodoList/TodoList";
import { selectTodos } from "../todos/selectors";

function mapStateToProps(state) {
  return {
    todos: selectTodos(state),
  };
}

function mapDispatchToProps() {
  return {};
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { TodoListContainer };
