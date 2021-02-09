import React from 'react'
import { connect } from 'react-redux'
import { deleteTaskAction } from '../actions/taskActions'
import { Link } from 'react-router-dom'
const TaskItem = (props) => {
  const { task } = props

  const handleDelete = () => {
    props.deleteTask(task.id)
  }

  return (
    <div style={{ display: 'flex', marginTop: '40px' }}>
      <Link to={`tasks/${task.id}`}>{task.title}</Link>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch(deleteTaskAction(id))
    },
  }
}

export default connect(null, mapDispatchToProps)(TaskItem)
