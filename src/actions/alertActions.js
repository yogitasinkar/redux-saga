import { SET_ALERT, RESET_ALERT } from '../config'

/**
 *
 * @param {color,text} msg
 */
export const setAlertAction = (msg) => {
  return {
    type: SET_ALERT,
    msg,
  }
}

export const resetAlertAction = (msg) => {
  return {
    type: RESET_ALERT,
  }
}
