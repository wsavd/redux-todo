import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AddTodo from './components/AddTodo'

const App = () => (
  <div>
    <AddTodo />
  </div>
);

render(<App />, document.getElementById('root'));
