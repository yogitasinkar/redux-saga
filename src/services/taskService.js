import axios from 'axios'
import { taskURL } from '../config/api'

export const getTasks = async () => {
  const { data } = await axios.get(taskURL)
  return data
}

export const getSingleTask = async (id) => {
  const { data } = await axios.get(taskURL + '/' + id)
  return data
}

/**
 *
 * @param {title, description} task
 */
export const addTask = async (task) => {
  task.completed = false
  task.data = '2020-08-18'
  const { data } = await axios.post(taskURL, task)
  return data
}

export const deleteTask = async (id) => {
  const { data } = await axios.delete(taskURL + '/' + id)
  return data
}
