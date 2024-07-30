# React ES6 with Redux Todo App

This is a basic Todo application built using React (ES6) and Redux, with actions being dispatched directly from the components.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/es6-react-redux-todo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd es6-react-redux-todo
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
- `src/components/TodoApp.js`: The main component of the Todo app, directly dispatching actions to the Redux store.
- `src/actions/index.js`: Action creators for Redux.
- `src/reducers/todos.js`: Reducer for managing todos state.
- `src/reducers/index.js`: Root reducer combining all reducers.
- `src/store/index.js`: Configures and creates the Redux store.
- `webpack.config.js`: Configuration file for Webpack.

## Features
- Add a new todo item
- Display a list of todo items
