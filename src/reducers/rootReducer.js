import { combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
  alert: alertReducer,
  user: userReducer,
})

export default rootReducer
