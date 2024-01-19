import React from 'react';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { style } from '@mui/system';
import { withStyles } from '@mui/material';

const Input = () => {
  return (
    <div style={styles.inputContainer}>
      <div style={styles.inputSpace}>
        Type something here
      </div>
      <div style={styles.inputComponents}>
        <AttachFileIcon />
        <AddPhotoAlternateIcon />
        <button style={styles.sendButton}>Send</button>
      </div>
    </div>
  )
}

const styles = {
  inputContainer: {
    backgroundColor: 'white',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 10px 0px 10px'
  },
  inputSpace: {
    color: 'grey',
    flex: 5,
  },
  inputComponents: {
    flex: 1,
    display: 'flex',
    cursor: 'pointer',
    gap: '5px',
    color: 'grey'
  },
  sendButton: {
    color: 'white',
    backgroundColor: '#a7bcff',
    border: 'none',
    borderRadius: '5px'
  }
}

export default Input;