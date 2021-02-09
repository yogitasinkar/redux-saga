import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTaskAction } from '../actions/taskActions'

const TaskForm = (props) => {
  const [data, setData] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(data)
    setData({
      title: '',
      description: '',
    })
  }
  return (
    <div>
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <div>
          <input
            type='text'
            value={data.title}
            onChange={handleChange}
            name='title'
          />
        </div>
        <label>Description</label>
        <div>
          <textarea
            type='text'
            value={data.description}
            onChange={handleChange}
            name='description'
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => {
      dispatch(addTaskAction(data))
    },
  }
}

export default connect(null, mapDispatchToProps)(TaskForm)
