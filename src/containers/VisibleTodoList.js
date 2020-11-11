import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import { toggleTodo } from '../features/todos/todosSlice';
import TodoList from '../components/TodoList';
// import { VisibilityFilters } from '../actions';
import { VisibilityFilters } from '../features/filters/filtersSlice';
import { createSelector } from '@reduxjs/toolkit';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos;
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter((t) => t.completed);
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter((t) => !t.completed);
//     default:
//       throw new Error('Unknown filter: ' + filter);
//   }
// };

const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.visibilityFilter;
const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }
);

const mapStateToProps = (state) => ({
  // todos: getVisibleTodos(state.todos, state.visibilityFilter),
  todos: selectVisibleTodos(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleTodo: (id) => dispatch(toggleTodo(id)),
// });

const mapDispatchToProps = { toggleTodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
