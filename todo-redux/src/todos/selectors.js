// reselect (createSelector = memoized selected)

export const selectNewTodo = (state) => state.newTodo;
export const selectTodos = (state) => state.todos;
export const selectTodosCount = (state) => selectTodos(state).length;