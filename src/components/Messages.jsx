import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div style={styles.messages}>
      <Message
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img="https://images.unsplash.com/photo-1606486544554-164d98da4889?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"        
        msg=""
        owner="true"
      />
      <Message 
        profile="https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
        img=""
        msg="are those freshly roasted?"
      />
      <Message
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img=""
        msg="yeah roasted yesterday afternoon! very fresh!"
        owner="true"
      />
      <Message 
        profile="https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
        img=""
        msg="omg!"
        owner=""
      />
      <Message 
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img=""
        msg="so you wanna buy or what"
        owner="true"
      />
      <Message 
        profile="https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
        img=""
        msg="nah im just asking"
        owner=""
      />
      <Message 
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img=""
        msg="zz you wasted my time"
        owner="true"
      />
      <Message 
        profile="https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
        img=""
        msg="bro chill things happened"
        owner=""
      />
      <Message 
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img=""
        msg="yeah bet"
        owner="true"
      />
      <Message 
        profile="https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
        img=""
        msg="how much is it per kg?"
        owner=""
      />
      <Message 
        profile="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img=""
        msg="10 bucks"
        owner="true"
      />
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
    gap: '10px',
    overflowY: 'auto'
  }
}

export default Messages;