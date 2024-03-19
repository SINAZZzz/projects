export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let nextTodoId:number = 0;

export const addTodo = (text:string) => ({ 
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed : false,
  },
});

export const toggleTodo = (id:number) =>({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id:number) => ({
  type: DELETE_TODO,
  payload : id,
});


