import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// our reducers
import account from './account'
import articles from './articles'

export const rootReducer = combineReducers({
  router: routerReducer,

  // our reducers
  account,
  articles,
})
