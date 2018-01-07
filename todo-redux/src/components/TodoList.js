import React from 'react'
import Todo from './Todo'
import map from 'lodash/map'

const TodoList = ({ todos, callback }) => {
  return (
    <div>
      <ul className="todo-list list-unstyled">
        {map(todos, (todo) => {
          return (
            <li key={todo.id}>
              <Todo todo={todo} callback={callback} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList