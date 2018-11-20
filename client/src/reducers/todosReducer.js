import { VisibilityFilters } from './actions/actionTypes';

​
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}
​
const todos = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed; false
        }
      ]

    case TOGGLE_TODO:
      return  {

        todos: state.todos.map( (todo, index) => {
            if(index === action.index) {
              return ({ ...todo, { 
                completed: !todo.completed 
                }
              });              
            }
          return todo;
        })
      }

    default:
      return state;
  }
}

const todoApp = (state = initialState, action) => {

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {...state, visibilityFilter: action.filter }

    case ADD_TODO:
      return ({...state, {
          todos: todos(state.todos, action)
        }
      })

    case TOGGLE_TODO:
      return ({ ...state, 
        {
          todos: todos(state.todos, action)
        }
      })
  default:
    return state
}

