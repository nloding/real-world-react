import http from './http'

const AuthApi = {
  getCurrentUser: () => http().get('/user'),
  login: (email, password) => http().post('/users/login', { user: { email, password }}),
  register: (username, email, password) => http().post('/users', { user: { username, email, password }}),
  save: user => http().put('/users', { user })
}

export default AuthApi
