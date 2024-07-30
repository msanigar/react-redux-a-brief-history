const React = require('react');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [],
      newTodo: ''
    };
  },
  handleInputChange: function(event) {
    this.setState({ newTodo: event.target.value });
  },
  addTodo: function() {
    if (this.state.newTodo.trim() !== '') {
      this.setState({
        todos: this.state.todos.concat(this.state.newTodo),
        newTodo: ''
      });
    }
  },
  render: function() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.state.todos.map(function(todo, index) {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoApp;