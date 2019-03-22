import { TODO_CHANGE, TODO_ADD } from "./constants";

function newTodoReducer(previousState = "", { type, payload }) {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

function todosReducer(previousState = [], { type, payload }) {
  switch (type) {
    case TODO_ADD:
      return [...previousState, payload];
    default:
      return previousState;
  }
}

export { newTodoReducer, todosReducer };
