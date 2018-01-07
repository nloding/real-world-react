import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import forEach from 'lodash/forEach'

import TodoList from './TodoList';

import * as todoActions from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.setState({ todo: '' })
  }
  
  onTodoChange(e) {
    this.setState({ todo: e.target.value })
  }
  
  addTodo(e) {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    this.setState({ todo: '' })
  }
  
  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="todo-list not-done">
              <h1>Todos</h1>
              
              <form onSubmit={this.addTodo}>
                <input type="text" className="form-control" placeholder="Add todo" value={this.state.todo} onChange={this.onTodoChange} />
              </form>
              <button className="btn btn-success" style={{ marginTop: '10px' }} onClick={this.props.completeAll}>Mark all as done</button>
              
              <TodoList todos={this.props.active} callback={this.props.completeTodo} />
              
              <div className="todo-footer">
                <strong>{todos.length}</strong> Items Left
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="todo-list">
              <h1>Already Done</h1>
              <TodoList todos={this.props.completed} callback={this.props.readdTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completed: forEach(state.completed, todoId => return state.todos[todoId]),
  active: forEach(state.active, todoId => return state.todos[todoId]),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { todoActions.addTodo, todoActions.completeTodo, todoActions.completeAll, todoActions.readdTodo }
)(App);
