import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { posts, authentication, ihelp } from './reducers/index'

const reducers = combineReducers({
  posts,
  authentication,
  ihelp
})

export default createStore(
  reducers,
  applyMiddleware(thunk))