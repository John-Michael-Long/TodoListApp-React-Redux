import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text  
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
});

