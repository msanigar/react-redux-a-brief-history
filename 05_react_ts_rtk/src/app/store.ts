import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
import photoReducer from '../features/photos/photoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    photos: photoReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
