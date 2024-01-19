import { style } from '@mui/system';
import React from 'react';

import User from './User';

const Search = () => {

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
    <div>
      {/* the search user */}
      <div> 
        <input style={styles.input} type="text" placeholder="find a user"/>
      </div>
      {/* bunch of users */}
      <div 
        style={userStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img style={styles.userImage} src="https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div style={styles.userInfo}>
          <span style={styles.userName}>Alex</span>
          <span style={styles.userStatus}>Hello</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  input: {
    backgroundColor: 'transparent',
    color: 'white',
    margin: '10px',
    border: 'none'
  },
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

export default Search;