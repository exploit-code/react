import defaultState from '../initialState'
import ADD_CHATS from '../actions/action_add_chats'
import REMOVE_CHAT from '../actions/action_remove_chats'

const chatsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CHATS:
        return {...state, chats: [...state.chats,  action.payload]}
      case REMOVE_CHAT: 
        return {...state, chats: state.chats.filter(chat => chat.id !== action.payload)}
      default: 
        return state
    }
}

export {chatsReducer}