import React, { Component } from 'react';
import Todos from './Todos.js';
import AddTodo from './AddTodo'


class App extends Component{
  state ={
    todos :[
      {id: 1, content:'Milk'},
      {id: 2, content:'Eggs'}
    ]
  }

  deleteTodo = (id) =>{
    //console.log(id)
    const newTodos = this.state.todos.filter( todo => {
      return (todo.id !== id)
    })

    this.setState({
      todos : newTodos
    })

  }

  addTodo = (todo) => {
    //console.log(todo)
    todo.id = Math.random()
    let todos =[...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center white-text"> Grocery Shopping list</h1>
        <h5 className="center white-text">Click items to delete, and add items below!</h5>
        <Todos todos={this.state.todos} deleteTodo ={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}


export default App;

