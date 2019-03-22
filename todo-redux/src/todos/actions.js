import { TODO_ADD, TODO_CHANGE } from "./constants";

function todoAdd(value) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      text: value,
      completed: false,
    },
  };
}

function todoChange(value) {
  return {
    type: TODO_CHANGE,
    payload: value
  };
}

export { todoAdd, todoChange };