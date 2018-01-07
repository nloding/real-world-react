import forEach from 'lodash/forEach'
import map from 'lodash/map'
import remove from 'lodash/remove'

import initialState from './initialState'
import * as types from '../actions/types'

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO: {
      const ids = Object.keys(state.todos)
      const nextId = ids.reduce((maxId, todoId) => Math.max(todoId, maxId), -1) + 1
      return {
        todos: {
          ...state.todos,
          [nextId]: {
            id: nextId,
            name: action.name,
            completed: false
          }
        },
        active: [
          ...state.active,
          nextId
        ],
        completed: [...state.completed]
      }
    }

    case types.COMPLETE_TODO: {
      action.todo.completed = true
      
      let active = state.active.slice() // note: this isn't deep, so keep that in mind
      remove(active, todoId => todoId === action.todo.id)
      
      return {
        todos: {
          ...state.todos,
          [action.todo.id]: action.todo
        },
        completed: [
          ...state.completed,
          action.todo.id
        ],
        active
      }
    }

    case types.COMPLETE_ALL:
      const todos = forEach(state.todos, todo => {
        todo.completed = true
        return todo
      })
      return {
        todos,
        completed: map(todos, 'id'),
        active: []
      }
      
    case types.READD_TODO: {
      action.todo.completed = false
      
      let completed = state.completed.slice() // note: this isn't deep, so keep that in mind
      remove(completed, todoId => todoId === action.todo.id)
      
      return {
        todos: {
          ...state.todos,
          [action.todo.id]: action.todo
        },
        completed,
        active: [
          ...state.active,
          action.todo.id
        ],
      }
    }
  }
  
  return state
}
