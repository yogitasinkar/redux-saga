import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const TaskManager = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default TaskManager
