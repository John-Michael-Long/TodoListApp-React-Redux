import * as actionTypes from './actionTypes';

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  text  
});

export const toggleTodo = index => ({
  type: actionTypes.TOGGLE_TODO,
  index
});

export const setVisibilityFilter = filter => {
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
}

