import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo } from '../features/todos/todoSlice';
import { fetchPhotos } from '../features/photos/photoSlice';
import TodoList from './TodoList';
import PhotoList from './PhotoList';

const TodoApp: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
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
      {loading && <p>Loading...</p>}
      {error && <p>Error loading photos: {error}</p>}
      <PhotoList />
    </div>
  );
};

export default TodoApp;
