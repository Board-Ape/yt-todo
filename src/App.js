import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Play basketball"}
    ]
  }

  deleteTodo = (id) => {
    const newState = this.state.todos.filter(todo => todo.id !== id)

    this.setState({
      todos: newState
    })
  }
  
  addTodo = (todo) => {
    todo.id = Math.random()
    const newState = [...this.state.todos, todo]

    this.setState({
      todos: newState
    })
  }

  render() {
    return (
      <div className="app-todos container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
