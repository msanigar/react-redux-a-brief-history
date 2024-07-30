import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchPhotos } from '../actions';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  }

  render() {
    const { todos, photos, loading, error } = this.props;

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

        <h2>Photos</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading photos: {error}</p>}
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.urls.thumb} alt={photo.description} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  photos: state.photos.data,
  loading: state.photos.loading,
  error: state.photos.error
});

const mapDispatchToProps = {
  addTodo,
  fetchPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
