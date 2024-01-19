import React from 'react';

const Message = ({profile, img, msg, owner}) => {
  const individualMessage = {
    display: 'flex',
    gap: '20px',
    maxHeight: '240px',
    flexDirection: owner ? 'row-reverse' : 'row',
  }

  return (
    <div style={individualMessage}>
      <div style={styles.messageInfo}>
        <img 
          style={styles.senderProfile}
          src={profile}
          alt=""
        />
        {/* <span style={styles.messageSent}>just now</span> */}
      </div>

      <div style={styles.messageContent}>
        {/* either send a msg or an img */}
        <p>{msg}</p>
        <img style={styles.imgSent} src={img} alt="" />
      </div>
      
    </div>
  )
}

const styles = {
  
  messageInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20px'
  },
  senderProfile: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  messageSent: {
    color: 'grey'
  },
  imgSent: {
    maxHeight: '200px',
    border: '0.5px solid grey'
  },
  messageContent: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#90a3eb',
    color: 'white',
    borderRadius: '10px 0px 10px 10px',
    padding: '0px 10px 0px 10px',
  }
}

export default Message;