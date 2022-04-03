import defaultState from '../initialState'
import ADD_MESSAGE from '../actions/action_add_message'


const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, chatMessages: action.payload }
    default:
      return state
  }
}

export { messageReducer }