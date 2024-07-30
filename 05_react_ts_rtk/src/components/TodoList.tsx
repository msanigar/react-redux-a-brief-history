import React from 'react';
import { useAppSelector } from '../app/hooks';

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  if (!todos || !Array.isArray(todos)) {
    return <p>No todos available</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
