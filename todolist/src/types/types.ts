// types.ts
export interface RootState {
    todos: Todo[];
  }
  
  export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  