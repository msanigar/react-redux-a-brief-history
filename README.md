# React & Redux: A Brief History

This project demonstrates the evolution of React and Redux implementations over the years, showcasing different stages and best practices at each point in time. The intention is to provide a reference for web developers to understand how React and Redux have evolved and to illustrate current standards and best practices.

## Intention of the Project

The intention of this project is to:

1. **Educate**: Provide a clear and practical reference for web developers to understand the evolution of React and Redux.
2. **Demonstrate**: Show how different versions and practices have been used over time.
3. **Guide**: Offer insights into current best practices for building modern React applications.

## Getting Started

Each folder contains its own `README.md` file with specific instructions on how to run the application. Below are general instructions applicable to all folders.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/react-redux-history.git
    ```
2. Navigate to the specific project directory:
    ```sh
    cd react-redux-history/01_early_react
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

## Project Structure and Features

```react-redux-history/
├── 01_early_react/
├── 02_es6_react_redux/
├── 03_react_redux_connected/
├── 04_react_contextAPI_hooks/
├── 05_react_ts_rtk/
└── README.md
```

### 01_early_react

- Basic React application without ES6
- Class components
- Basic state management

### 02_es6_react_redux

- React application using ES6 syntax
- Early version of Redux for state management
- Class components with ES6 features

### 03_react_redux_connected

- React application using class components
- Redux Thunk for handling asynchronous actions
- Axios for making API requests
- `connect` function to map state and dispatch to props

### 04_react_contextAPI_hooks

- React application using Context API for global state
- React Hooks for local state and side effects
- Functional components

### 05_react_ts_rtk

- Modern React application with TypeScript
- Redux Toolkit for simplified Redux state management
- React Hooks for functional components
- Strong typing with TypeScript

## License

This project is licensed under the MIT License.

## Acknowledgements

Thanks to the React and Redux communities for their continuous development and improvements.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!
