import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import users from './users'
import questions from './questions'
import authedUser from './authedUser'

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})
