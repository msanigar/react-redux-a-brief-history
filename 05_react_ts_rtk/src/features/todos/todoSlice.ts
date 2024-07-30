import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        text: action.payload
      };
      state.todos.push(newTodo);
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
