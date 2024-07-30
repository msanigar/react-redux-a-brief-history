import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};