import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.markAllComplete = this.markAllComplete.bind(this)
    this.markCompleted = this.markCompleted.bind(this)
    this.markTodo = this.markTodo.bind(this)
    this.onTodoChange = this.onTodoChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    
    this.state = {
      todo: '',
      todos: [
        { id: 1, name: 'Take out the trash', completed: false },
        { id: 2, name: 'Buy bread', completed: false },
        { id: 3, name: 'If they have eggs, buy a dozen', completed: false },
        { id: 4, name: 'I already did this task', completed: true }
      ]
    }
  }
  
  markAllComplete() {
    const todos = this.state.todos.map(t => { t.completed = true; return t; })
    this.setState({ todos })
  }
  
  markCompleted(todo) {
    todo.completed = true
    const todos = this.state.todos.map(t => (t.id === todo.id) ? todo : t)
    this.setState({ todos })
  }
  
  markTodo(todo) {
    todo.completed = false
    const todos = this.state.todos.map(t => (t.id === todo.id) ? todo : t)
    this.setState({ todos })
  }
  
  onTodoChange(e) {
    this.setState({ todo: e.target.value })
  }
  
  addTodo(e) {
    e.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.todos.length+1, completed: false, name: this.state.todo }
      ],
      todo: ''
    })
  }
  
  render() {
    // pull out completed todos
    const completed = this.state.todos.reduce((acc, curr) => {
      if (curr.completed)
        return [...acc, curr]
        
      return acc
    }, [])
    
    // pull out unfinished todos
    const todos = this.state.todos.reduce((acc, curr) => {
      if (!curr.completed)
        return [...acc, curr]
        
      return acc
    }, [])
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="todo-list not-done">
              <h1>Todos</h1>
              <form onSubmit={this.addTodo}>
                <input type="text" className="form-control" placeholder="Add todo" value={this.state.todo} onChange={this.onTodoChange} />
              </form>
              <button className="btn btn-success" style={{ marginTop: '10px' }} onClick={this.markAllComplete}>Mark all as done</button>
              
              <TodoList todos={todos} callback={this.markCompleted} />
              <div className="todo-footer">
                <strong>{todos.length}</strong> Items Left
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="todo-list">
              <h1>Already Done</h1>
              <TodoList todos={completed} callback={this.markTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
