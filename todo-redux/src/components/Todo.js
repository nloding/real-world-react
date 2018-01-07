import React from 'react'

const Todo = ({ todo, callback }) => {
  const { name, completed } = todo
  
  if (completed) {
    return (
      <div>
        {name}
        <button className="remove-item btn btn-default btn-xs float-right" onClick={() => callback(todo)}>
          <span className="far fa-times-circle"></span>
        </button>
      </div>
    )
  }
  
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" onClick={() => callback(todo)} />
      <label className="form-check-label" onClick={() => callback(todo)}>{name}</label>
    </div>
  )
}

export default Todo