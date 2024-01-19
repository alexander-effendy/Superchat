import React from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const img = e.target[3].files[0];

    

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.title}>
          <span>Fenguin Chat</span>
          <span style={styles.oatmeal}>Oatmeal lover</span>
        </div>
        
        <form 
          style={styles.form}
          onSubmit={handleSubmit}
        >
          <input style={styles.input} type="text" placeholder="full name (e.g. Smally Fenguin)" />
          <input style={styles.input} type="email" placeholder="emaill (e.g. small.fenguin@gmail.com" />
          <input style={styles.input} type="password" placeholder="password" />
          <input style={styles.fileInput} type="file" id="file" />
          <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }} htmlFor="file">
            <AddPhotoIcon style={{ width: '20px' }} />
            <span style={styles.addAvatar}>Add an avatar</span>
          </label>
          <button 
            style={styles.button}
          >
            Sign up
          </button>
        </form>
        
        <div style={styles.question}>Have an account? Login</div>
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

export default Register;