// src/TodoList.tsx
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';



interface Props {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC<Props> = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state : any) => ({
  todos: state,
});

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(TodoList);
