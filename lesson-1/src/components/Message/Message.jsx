import React from 'react';
import './Message.scss';

const Message = ({message}) => {
  return (
    <h1 className='message'>{message}</h1>
  );
}
export default Message;