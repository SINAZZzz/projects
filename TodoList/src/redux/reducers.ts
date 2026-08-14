import * as actions from './actions'

interface Todo { 
  id: number;
  text: string;
  completed: boolean;
}

interface Action { 
  type: string;
  payload: any;
}

const initialState : Todo[] = [];

const todoReducer = (state = initialState , action: Action) => {
  switch(action.type){
    case actions.ADD_TODO:
      return [...state ,  action.payload]
    case actions.TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? {...todo , completed: !todo.completed } : todo);
    case actions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todoReducer;