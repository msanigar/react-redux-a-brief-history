# Modern React with TypeScript, Redux Toolkit, and Hooks

This is a modern Todo application built using React with TypeScript, Redux Toolkit, and Hooks.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/msanigar/react-redux-a-brief-history.git
    ```
2. Navigate to the project directory:
    ```sh
    cd react-redux-a-brief-history/05_react_ts_rtk
    ```
3. Install the dependencies:
    ```sh
    npm install
    `

### Running the App
1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and go to `http://localhost:9000`

## Project Structure
- `public/index.html`: The HTML file that contains the root div for the React app.
- `src/index.tsx`: The entry point for the React application.
- `src/components/TodoApp.tsx`: The main component of the Todo app.
- `src/components/TodoList.tsx`: Component to display the list of todos.
- `src/components/PhotoList.tsx`: Component to display photos from the Unsplash API.
- `src/features/todos/todoSlice.ts`: Redux slice for managing todos.
- `src/features/photos/photoSlice.ts`: Redux slice for managing photos and fetching them from the API.
- `src/app/store.ts`: Configures and creates the Redux store with Redux Toolkit.
- `src/app/hooks.ts`: Custom hooks for TypeScript support in Redux.
- `webpack.config.js`: Configuration file for Webpack.
- `.eslintrc.json`: Configuration file for ESLint.
- `.prettierrc`: Configuration file for Prettier.

## Features
- Add a new todo item
- Display a list of todo items
- Fetch and display photos from the Unsplash API using Fetch API and Redux Toolkit
