import axios from 'axios'

import config from '../config'

export default function(options = {}) {
  const defaultOptions = {
    baseURL: config.apiRoot,
    headers: {}
  }

  const opts = Object.assign({}, defaultOptions, options)

  const token = window.sessionStorage.getItem('jwt')
  if (token && !opts.headers.Authorization) {
    opts.headers.Authorization = `Token ${token}`
  }

  let http = axios.create(opts)

  // optional: add a response interceptor
  // http.interceptors.response.use(
  //   res => res,
  //   err => Promise.reject(err)
  // )

  return http
}
