/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem'
import { loadTasksAction } from '../actions/taskActions'

const TaskList = (props) => {
  const { tasks, loadTasks } = props

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 && <p>No Tasks found!</p>}
      {tasks.map((task) => (
        <TaskItem key={task.title} task={task} />
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: () => dispatch(loadTasksAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)

// connect function return a function which takes TaskList compo as argument
// connectFn = connect()
// connectFn(TaskList)
