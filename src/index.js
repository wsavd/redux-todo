import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
);

render(<App />, document.getElementById('root'));
