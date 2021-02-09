import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUserAction } from '../../actions/authActions'
import { login } from '../../services/userService'

const Login = (props) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // login(data)
    //   .then((user) => {
    //     console.log(user)
    //     props.history.push('/tasks')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    //Dispatch login action
    //props.dispatch(loginUserAction(data))
    props.login(data)
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={data.username}
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => {
      dispatch(loginUserAction(creds))
    },
  }
}

export default connect(null, mapDispatchToProps)(Login)
