import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUserAction } from '../actions/authActions'

const Nav = (props) => {
  const { user } = props
  const handleLogout = () => {
    props.dispatch(logoutUserAction())
  }
  return (
    <nav>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Nav)
