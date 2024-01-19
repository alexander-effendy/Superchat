import React from 'react';

import User from './User';
const Chats = ({style}) => {

  const [hover, setHover] = React.useState(false);

  const userStyle= {
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    backgroundColor: hover ? '#2f2d52' : 'transparent'
  }

  return (
    <div style={style}>
      <User pic="https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGJlYXV0aWZ1bCUyMGFzaWFufGVufDB8fDB8fHww" name="Gwen" status="I love cupcakes"/>
      <User pic="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Chanel" status="I'm ready"/>
      <User pic="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="John" status="I am John Cena"/>
    </div>

  )
}

const styles = {
  userImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  userInfo: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  userName: {
    fontWeight: 'bold'
  }
}

export default Chats;