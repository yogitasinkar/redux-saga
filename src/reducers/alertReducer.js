import { SET_ALERT, RESET_ALERT } from '../config'

const initialState = {
  color: '',
  text: '',
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.msg

    case RESET_ALERT:
      return initialState

    default:
      return state
  }
}
