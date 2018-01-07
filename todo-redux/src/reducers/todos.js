import forEach from 'lodash/forEach'
import map from 'lodash/map'
import remove from 'lodash/remove'

import initialState from './initialState'
import * as types from '../actions/types'

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const ids = Object.keys(state.todos)
      const nextId = ids.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
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
        ]
      }
    }

    case COMPLETE_TODO: {
      action.todo.completed = true
      
      let active = state.active.splice() // note: this isn't deep, so keep that in mind
      remove(active, todo => todo.id === action.todo.id)
      
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

    case COMPLETE_ALL:
      const todos = forEach(state.todos, todo => {
        todo.completed = true
        return todo
      })
      return {
        todos,
        completed: map(todos, 'id'),
        action: []
      }
      
    case READD_TODO: {
      action.todo.completed = false
      
      let completed = state.completed.splice() // note: this isn't deep, so keep that in mind
      remove(completed, todo => todo.id === action.todo.id)
      
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
