import React from 'react';
import ChatInfo from './ChatInfo';
import Messages from './Messages';
import Input from './Input';

const Chat = ({style}) => {
  return (
    <div style={style}>
      <ChatInfo />
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;