import React from 'react';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.title}>
          <span>Fenguin Chat</span>
          <span style={styles.oatmeal}>Oatmeal lover</span>
        </div>
        
        <form style={styles.form}>
          <input style={styles.input} type="email" placeholder="emaill (e.g. small.fenguin@gmail.com" />
          <input style={styles.input} type="password" placeholder="password" />
          <button style={styles.button}>Sign in</button>
        </form>
        
        <div style={styles.question}>Don't have an account? Register</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#a7bcff',
    minHeight: '100vh'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 60px',
    backgroundColor: 'white',
    borderRadius: '10px',
    color: '#7b96ec'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  oatmeal: {
    fontFamily: 'Apple Chancery, cursive',
    fontSize: '20px'
  },
  input: {
    padding: '15px',
    border: 'none',
    width: '220px',
    borderBottom: '1px solid #a7bcff',
  },
  fileInput: {
    padding: '15px',
    border: 'none',
    borderBottom: '1px solid #a7bcff',
    display: 'none'
  },
  button: {
    backgroundColor: '#7b96ec',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px',
    cursor: 'pointer'
  },
  question: {
    marginTop: '10px'
  },
  addAvatar: {
    fontSize: '12px'
  }
}

export default Login;