import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Alert from './components/Alert'
import Login from './components/Login/Login'
import Nav from './components/Nav'
import PageNotFound from './components/PageNotFound'
import Register from './components/Register/Register'
import TaskDetails from './components/TaskDetails'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <Alert />
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/tasks' component={TaskManager} />
        <Route path='/tasks/:id' component={TaskDetails} />
        <Route path='/**' component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App
