import React from 'react';
import ReactDOM from 'react-dom';
import { TodoProvider } from './context/TodoContext';
import { PhotoProvider } from './context/PhotoContext';
import TodoApp from './components/TodoApp';

ReactDOM.render(
  <TodoProvider>
    <PhotoProvider>
      <TodoApp />
    </PhotoProvider>
  </TodoProvider>,
  document.getElementById('root')
);