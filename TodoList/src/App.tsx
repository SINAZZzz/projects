// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
