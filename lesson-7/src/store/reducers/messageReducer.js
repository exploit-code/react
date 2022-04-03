import defaultState from '../initialState'
import ADD_MESSAGE from '../actions/action_add_message'
import ADD_CHAT_MESSAGES from '../actions/action_add_chat_messages'
import REMOVE_CHAT_MESSAGES from '../actions/action_remove_chat_messages'


const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return {...state, chatMessages: action.payload}
      case ADD_CHAT_MESSAGES:
        return {...state, chatMessages: {...state.chatMessages, [action.payload] : [] }}
      case REMOVE_CHAT_MESSAGES:
        return {...state, chatMessages: action.payload}
      default: 
        return state
    }
}

export {messageReducer}