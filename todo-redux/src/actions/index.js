import * as types from './types'

export const addTodo = name => ({ type: types.ADD_TODO, name })
export const completeTodo = todo => ({ type: types.COMPLETE_TODO, todo })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const readdTodo = todo => ({type: types.READD_TODO, todo })