import React, { useState, useEffect } from 'react'
import { getSingleTask } from '../services/taskService'

const TaskDetails = (props) => {
  const { id } = props.match.params
  const [task, setTask] = useState(null)

  useEffect(() => {
    async function fetchSingleTask() {
      setTask(await getSingleTask(id))
    }
    fetchSingleTask()
  }, [id])

  //   const task = await getSingleTask(id)
  //   console.log(task)
  return (
    <div>
      Task Details
      {task && (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          Completed?<p>{task.completed}</p>
        </>
      )}
      {task === null && <p>Loading...</p>}
    </div>
  )
}

export default TaskDetails
