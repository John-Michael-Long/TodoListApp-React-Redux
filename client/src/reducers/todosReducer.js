import {combineReducers} from 'redux'
import * as actionTypes from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ]

    case actionTypes.TOGGLE_TODO:
      return state.map( todo => 
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo 
      )
    default:
      return state;
  }
}

const visibilityFilter = (state = actionTypes.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;

//NOTE: THIS IS EQUVLANT OF ABOVE
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }


// const todoApp = (state = initialState, action) => {

//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {...state, 
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action);
//       }

//     case ADD_TODO:
//       return ({...state, {
//           todos: todos(state.todos, action)
//         }
//       })

//     case TOGGLE_TODO:
//       return ({ ...state, 
//         {
//           todos: todos(state.todos, action)
//         }
//       })
//   default:
//     return state
// }

