import React from 'react';

const Message = () => {
  return (
    <div style={styles.individualMessage}>
      <div style={styles.messageInfo}>
        <img 
          style={styles.senderProfile}
          src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlraW5pJTIwZ2lybCUyMHNleHl8ZW58MHx8MHx8fDA%3D"
          alt="bikini girl"
        />
        <span style={styles.messageSent}>just now</span>
      </div>

      <div style={styles.messageContent}>
        {/* either send a msg or an img */}
        <p>hey!</p>
        <img src="" alt="" />
      </div>
      
    </div>
  )
}

const styles = {
  individualMessage: {
    display: 'flex',
    gap: '20px',
    height: '10px',
    marginBottom: '20px'
  },
  messageInfo: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    alignItems: 'center',
    width: '20px'
  },
  senderProfile: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  messageSent: {
    color: 'grey'
  }

}

export default Message;