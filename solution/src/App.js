import React from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoForm />
      <Filter />
      <TodoList />

    </div>
  );
}

export default App;
