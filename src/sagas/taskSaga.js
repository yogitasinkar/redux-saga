import { takeEvery, call, put, all } from 'redux-saga/effects'
import * as types from '../config'
import * as services from '../services/taskService'
import * as actions from '../actions/taskActions'
import * as alert from '../actions/alertActions'

// Load Saga
function* loadTasks() {
  try {
    const tasks = yield call(services.getTasks)
    yield put(actions.tasksLoadedAction(tasks))
  } catch (e) {
    console.log(e)
  }
}

function* addTask({ data }) {
  try {
    const task = yield call(services.addTask, data)
    yield put(actions.taskAddedAction(task))
    yield put(
      alert.setAlertAction({
        text: 'Task added successfully',
        color: 'green',
      })
    )
  } catch (e) {
    console.log(e)
    yield put(
      alert.setAlertAction({
        text: 'Task not added successfully',
        color: 'red',
      })
    )
  }
}

function* deleteTask({ id }) {
  try {
    yield call(services.deleteTask, id)
    yield put(actions.taskDeletedAction(id))
    yield put(
      alert.setAlertAction({
        text: 'Task deleted successfully',
        color: 'green',
      })
    )
  } catch (e) {
    console.log(e)
    yield put(
      alert.setAlertAction({
        text: 'Task not deleted successfully',
        color: 'red',
      })
    )
  }
}

//Watcher Saga
function* watchLoadTasks() {
  yield takeEvery(types.LOAD_TASKS, loadTasks)
}

function* watchAddTask() {
  yield takeEvery(types.ADD_TASK, addTask)
}

function* watchDeleteTask() {
  yield takeEvery(types.DELETE_TASK, deleteTask)
}

export function* taskSaga() {
  yield all([watchLoadTasks(), watchAddTask(), watchDeleteTask()])
}
