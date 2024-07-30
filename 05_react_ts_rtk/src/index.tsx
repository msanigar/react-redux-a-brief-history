import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import TodoApp from './components/TodoApp';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </Provider>
  );
} else {
  console.error('Failed to find the root element');
}
