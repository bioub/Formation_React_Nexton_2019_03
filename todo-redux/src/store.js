import { createStore, combineReducers } from "redux";
import { newTodoReducer, todosReducer } from "./todos/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  newTodo: newTodoReducer,
  todos: todosReducer
});

function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}

export { configureStore };
