import { combineReducers } from 'redux'
import { chatsReducer } from './chatsReducer'
import { profileReducer } from './profileReducer'
import { messageReducer } from './messageReducer'

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    chatMessages: messageReducer
})

export default rootReducer