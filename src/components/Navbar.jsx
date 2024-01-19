import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.container}>
      <span style={styles.logo}>Fenguin</span>
      <div style={styles.user}>
        <img style={styles.img} src="https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>John</span>
        <button style={styles.button}>logout</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#2f2d52',
    height: '50px',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ddddf7'
  },
  logo: {
    fontWeight: '800'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  img: {
    backgroundColor: '#ddddf7',
    height: '24px',
    width: '24px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  button: {
    backgroundColor: '#5d5b8d',
    border: 'none',
    fontSize: '10px',
    color: 'white'
  }

}

export default Navbar;