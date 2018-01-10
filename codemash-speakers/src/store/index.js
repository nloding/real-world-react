import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

export const history = createHistory()

const reactRouterMiddleware = routerMiddleware(history)

const middlewares = [
  // thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  thunk,
  reactRouterMiddleware,
]

// IN A REAL APP, CHECK ENVIRONMENT
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

const store = createStore(rootReducer, {} /* initial state */, composeEnhancers(
  applyMiddleware(...middlewares)
  )
)

export default store
