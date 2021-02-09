import React from 'react'
import { connect } from 'react-redux'
import { resetAlertAction } from '../actions/alertActions'

const Alert = (props) => {
  const { color, text } = props.alert
  console.log(color, text)

  // WITHOUT MAPDISPATCH TO PROPS.
  setTimeout(() => props.dispatch(resetAlertAction()), 2000)

  if (text === '') {
    return <></>
  }

  return (
    <div>
      <h3 style={{ color }}>{text}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    alert: state.alert,
  }
}

export default connect(mapStateToProps)(Alert)
