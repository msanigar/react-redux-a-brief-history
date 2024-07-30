import React, { Component } from 'react';
import { addTodo } from '../actions';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.props.store.dispatch(addTodo(this.state.newTodo));
      this.setState({ newTodo: '' });
    }
  }

  render() {
    const { todos } = this.props.store.getState();

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

export default TodoApp;
