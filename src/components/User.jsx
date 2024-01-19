import React from 'react';

const User = ({pic, name, status}) => {

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
    <div 
      style={userStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img style={styles.userImage} src={pic} alt="" />
      <div style={styles.userInfo}>
        <span style={styles.userName}>{name}</span>
        <span style={styles.userStatus}>{status}</span>
      </div>
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

export default User;