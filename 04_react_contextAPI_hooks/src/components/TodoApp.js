import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoList from './TodoList';
import PhotoList from './PhotoList';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
      <h2>Photos</h2>
      <PhotoList />
    </div>
  );
};

export default TodoApp;