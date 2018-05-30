import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { rootReducer } from './ducks'

export const history = createHistory()

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    thunk,
    reactRouterMiddleware,
  ]

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  )

  return store
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [
    thunk,
    reactRouterMiddleware,

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  return store
}

export const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export const store = configureStore()
