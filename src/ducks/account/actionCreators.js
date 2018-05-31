import { push } from 'react-router-redux'

import { AuthApi } from '../../api'

import { LOGGED_IN_SUCCESS } from './actions'

export const setUser = user => ({ type: LOGGED_IN_SUCCESS, payload: user })

export const logIn = (email, password) => dispatch => (
  AuthApi.login(email, password)
    .then(
      result => {
        window.sessionStorage.setItem('jwt', result.data.user.token)

        dispatch(setUser(result.data.user))
        dispatch(push('/'))

        return result.data.user
      }
    )
)
