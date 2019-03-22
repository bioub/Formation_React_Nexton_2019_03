import { connect } from "react-redux";
import { TodoForm } from "../todos/components/TodoForm/TodoForm";
import { selectNewTodo } from "../todos/selectors";
import { todoChange, todoAdd } from "../todos/actions";

function mapStateToProps(state) {
  return {
    newTodo: selectNewTodo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChange: (value) => dispatch(todoChange(value)),
    onNewTodoSubmit: (value) => dispatch(todoAdd(value)),
  };
}

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export { TodoFormContainer };
