import addNewMessage from '../actionCreators/add_message_action'

export const addRobotMessageThunkCreator = (chatMessages, id) => {

    let copyObj = Object.assign({}, chatMessages);
    let payload = {...copyObj, [id]: [...copyObj[id], 'Hi i am a robot i always answer. You can ask me what you want']}

    return (dispatch) => {
        setTimeout(
            () => dispatch(addNewMessage(payload)), // Сюда должен прийти уже измененный стейт с сообщением от робота
            2000
        )
    }
}