import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App.jsx';

import style from './styles/main.css';
import todoApp from './reducers/todosReducer.js';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from './actions/actions';

import * as actionTypes from './actions/actionTypes';

const store = createStore(todoApp);

// Log the initial state
console.log( store.getState() )
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(actionTypes.VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


