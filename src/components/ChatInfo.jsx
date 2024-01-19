import React from 'react';

import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ChatInfo = () => {
  return (
    <div style={styles.container}>
      <span style={styles.chatName}>Jane</span>
      <div style={styles.chatIcons}>
        <VideocamIcon style={styles.icon}/>
        <PersonAddIcon style={styles.icon}/>
        <MoreHorizIcon style={styles.icon}/>
      </div>

    </div>
  )
}

const styles = {
  container: {
    heigh: '50px',
    backgroundColor: '#5d5b8d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '23px',
    cursor: 'pointer',
    color: 'white'
  },
  chatName: {
    fontSize: '20px'
  },
  chatIcons: {
    display: 'flex',
    gap: '10px'
  },
  icon: {
    maxHeight: '24px'
  }
}

export default ChatInfo;