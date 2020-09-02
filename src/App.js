import React, { Component } from 'react'
import Todos from './Todos'
import NewItem from './NewItem'

export class App extends Component {
  state = {
    todos : [
      {id : 1, content : 'Complete AWS'},
      {id : 2, content : 'Complete React'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center-align">TO-DO List</h1>
        <NewItem addTodo = {this.addTodo}></NewItem>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      </div>
    )
  }
}

export default App
