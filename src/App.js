import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Play basketball"}
    ]
  }

  render() {
    return (
      <div className="app-todos container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
