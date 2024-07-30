# React Context API and Hooks Todo App

This is a basic Todo application built using React with Context API for global state management and Hooks for local state management.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/context-api-hooks-todo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd context-api-hooks-todo
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the App
1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and go to `http://localhost:9000`

## Project Structure
- `public/index.html`: The HTML file that contains the root div for the React app.
- `src/index.js`: The entry point for the React application.
- `src/components/TodoApp.js`: The main component of the Todo app.
- `src/components/TodoList.js`: Component to display the list of todos.
- `src/components/PhotoList.js`: Component to display photos from the Unsplash API.
- `src/context/TodoContext.js`: Context and provider for managing todos.
- `src/context/PhotoContext.js`: Context and provider for managing photos.
- `webpack.config.js`: Configuration file for Webpack.

## Features
- Add a new todo item
- Display a list of todo items
- Fetch and display photos from the Unsplash API using Axios and Context API with Hooks