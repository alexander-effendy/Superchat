import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div style={styles.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

const styles = {
  messages: {
    backgroundColor: '#ddddf7',
    padding: '20px',
    height: 'calc(100% - 160px',
    display: 'flex',
    flexDirection: 'column',
    gap: '70px',
  }
}

export default Messages;