import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userLoggedIn } from './actions/authActions'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import { checkUser } from './services/userService'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))

const user = checkUser()
if (user) {
  store.dispatch(userLoggedIn(user))
}

saga.run(rootSaga)

export default store
